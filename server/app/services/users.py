from fastapi import HTTPException
from sqlalchemy.orm import Session
from .base import BaseService
from app.models.users import User as UserModel


class UsersService(BaseService):
    def __init__(self, db_session: Session):
        super().__init__(UserModel, db_session)

    def get_from_alias(self, alias: str):
        user = self.db_session.query(self.model).filter_by(alias=alias).first()
        if user is None:
            raise HTTPException(status_code=404, detail="Not Found")
        return user


