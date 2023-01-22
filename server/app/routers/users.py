from fastapi import APIRouter, Depends
from pydantic import UUID4
from sqlalchemy.orm import Session

from app.dependencies.auth import verify_token
from app.schemas.auth import TokenData
from app.services.database import get_db
from app.schemas.users import User, UserCreate
from app.services.base import BaseService
from app.models.users import User as UserModel


router = APIRouter(tags=["users"])


@router.post("/users/", status_code=201, response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    service = BaseService(UserModel, db)
    return service.create(user)


@router.get("/users/{user_id}/", status_code=200, response_model=User)
def get_user(user_id: UUID4, db: Session = Depends(get_db), payload: TokenData = Depends(verify_token)):
    service = BaseService(UserModel, db)
    return service.get(user_id)
