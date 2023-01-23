from typing import List

from fastapi import APIRouter, Depends
from pydantic import UUID4
from sqlalchemy.orm import Session

from app.dependencies.auth import verify_token
from app.schemas.auth import TokenData
from app.services.database import get_db
from app.schemas.users import User, DisplayUser
from app.services.users import UsersService


router = APIRouter(tags=["users"], prefix="/users")


@router.get("/{user_id}/", status_code=200, response_model=User)
def get_user(
    user_id: UUID4,
    db: Session = Depends(get_db),
    payload: TokenData = Depends(verify_token),
):
    service = UsersService(db)
    return service.get(user_id)


@router.get("/", status_code=200, response_model=List[DisplayUser])
def list_users_top_ten(db: Session = Depends(get_db)):
    service = UsersService(db)
    return service.list_top_ten()
