from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.schemas.users import UserCreate, AuthenticatedUser
from app.services.database import get_db
from app.schemas.auth import Token
from app.dependencies.auth import ACCESS_TOKEN_EXPIRE_MINUTES, authenticate_user, register_user, create_access_token

router = APIRouter(tags=["auth"])


@router.post("/login", response_model=AuthenticatedUser)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect alias or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        sub=user.id, expires_delta=access_token_expires
    )

    token = Token(access_token=access_token, token_type="bearer")
    return AuthenticatedUser(user=user, token=token)


@router.post("/register", response_model=AuthenticatedUser)
async def register(data: UserCreate, db: Session = Depends(get_db)):
    user = register_user(db, data)
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        sub=user.id, expires_delta=access_token_expires
    )
    token = Token(access_token=access_token, token_type="bearer")
    return AuthenticatedUser(user=user, token=token)
