from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.services.database import get_db
from app.schemas.users import User, UserCreate
from app.services.base import BaseService
from app.models.users import User as UserModel


router = APIRouter(tags=["users"])


@router.post("/users/", status_code=201, response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    service = BaseService(UserModel, db)
    return service.create(user)
