from pydantic import UUID4
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from passlib.context import CryptContext
from app.config import settings
from app.schemas.users import UserCreate
from app.services.users import UsersService
from app.models.users import User as UserModel

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

ALGORITHM = "HS256"


async def verify_token(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        token = token.split("Bearer ")[-1]
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[ALGORITHM])
        if payload.get("sub") is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    return payload


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def authenticate_user(db: Session, username: str, password: str) -> UserModel:
    user = UsersService(db).get_from_username(username)
    if not user:
        return False
    if not verify_password(password, user.password):
        return False
    return user


def register_user(db: Session, user_data: UserCreate) -> UserModel:
    user_data.password = get_password_hash(user_data.password)
    return UsersService(db).create(user_data)


def create_access_token(sub: UUID4, expires_delta: timedelta | None = None):
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)

    encoded_jwt = jwt.encode({"sub": str(sub), "exp": expire}, settings.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
