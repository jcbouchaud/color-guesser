from sqlalchemy.orm import Session
from .models import User
from .schemas import UserCreate


def create_user(db: Session, item: UserCreate) -> User:
    db_user = User(**item.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_user_by_alias(db: Session, alias: str) -> User | None:
    return db.query(User).filter(User.alias == alias).first()
