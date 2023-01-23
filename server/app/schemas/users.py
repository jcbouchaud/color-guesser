from typing import List
from pydantic import BaseModel, UUID4

from .auth import Token
from .games import Game
from .schemas import CamelResponse


class UserCreate(BaseModel):
    username: str
    password: str


class User(UserCreate, CamelResponse):
    id: UUID4
    games: List[Game]
    best_score: int = 0


class AuthenticatedUser(User, CamelResponse):
    token: Token


class DisplayUser(CamelResponse):
    username: str
    best_score: int

