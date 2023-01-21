from pydantic import BaseModel
from typing import List


class Round(BaseModel):
    id: str
    user_answer: str
    right_answer: str
    choices: List[str]

    class Config:
        orm_mode = True


class Game(BaseModel):
    id: str
    score: int = 0
    on_going: bool = False
    rounds: List[Round]

    class Config:
        orm_mode = True


class UserCreate(BaseModel):
    alias: str


class User(UserCreate):
    id: str
    games: List[Game]
    best_score: int = 0

    class Config:
        orm_mode = True
