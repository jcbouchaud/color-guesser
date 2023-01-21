from pydantic import BaseModel
from typing import List


class Round(BaseModel):
    id: int
    user_answer: str
    right_answer: str
    choices: List[str]

    class Config:
        orm_mode = True


class Game(BaseModel):
    id: int
    score: int = 0
    on_going: bool = False
    rounds: List[Round]

    class Config:
        orm_mode = True
