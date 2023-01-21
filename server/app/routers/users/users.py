from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import User, UserCreate
from app.crud import get_user_by_alias, create_user


router = APIRouter(tags=["users"])


@router.post("/users/", response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_alias(db, alias=user.alias)
    if db_user:
        raise HTTPException(status_code=400, detail="Alias already exists.")
    return create_user(db=db, user=user)