from sqlalchemy.orm import Session
from .base import BaseService
from app.models.users import User as UserModel


class UsersService(BaseService):
    def __init__(self, db_session: Session):
        super().__init__(UserModel, db_session)


