from fastapi import HTTPException
from sqlalchemy import desc
from sqlalchemy.orm import Session
from .base import BaseService
from app.models.users import User as UserModel


class UsersService(BaseService):
    def __init__(self, db_session: Session):
        super().__init__(UserModel, db_session)

    def get_from_username(self, username: str):
        user = self.db_session.query(self.model).filter_by(username=username).first()
        if user is None:
            raise HTTPException(status_code=404, detail="Not Found")
        return user

    def list_top_ten(self):
        users = self.db_session.query(self.model)\
            .filter(self.model.best_score > 0)\
            .order_by(desc("best_score"))\
            .limit(10)\
            .all()
        return users


