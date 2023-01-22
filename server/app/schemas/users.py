from typing import List
from pydantic import BaseModel, UUID4

from .auth import Token
from .games import Game


class UserCreate(BaseModel):
    alias: str
    password: str


class User(UserCreate):
    id: UUID4
    games: List[Game]
    best_score: int = 0

    class Config:
        orm_mode = True


class AuthenticatedUser(User):
    token: Token

