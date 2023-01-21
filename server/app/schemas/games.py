from pydantic import BaseModel, UUID4
from typing import List


class RoundCreate(BaseModel):
    user_answer: str
    right_answer: str
    choices: List[str]


class Round(RoundCreate):
    id: int

    class Config:
        orm_mode = True


class GameCreate(BaseModel):
    player_id: UUID4
    score: int = 0
    on_going: bool = True


class GameStatusUpdate(BaseModel):
    on_going: bool = False


class Game(GameCreate):
    id: int
    rounds: List[Round]

    class Config:
        orm_mode = True


class GameCreateBody(BaseModel):
    user_id: str


class GameUpdateBody(BaseModel):
    game_id: str
    round: RoundCreate