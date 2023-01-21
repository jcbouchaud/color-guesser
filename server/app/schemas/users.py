from typing import List
from pydantic import BaseModel
from .games import Game


class UserCreate(BaseModel):
    alias: str


class User(UserCreate):
    id: int
    games: List[Game]
    best_score: int = 0

    class Config:
        orm_mode = True
