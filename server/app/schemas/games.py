from pydantic import BaseModel, UUID4
from typing import List

from app.schemas.schemas import CamelResponse


class RoundCreate(BaseModel):
    user_answer: str
    right_answer: str
    choices: List[str]


class Round(RoundCreate):
    id: UUID4

    class Config:
        orm_mode = True


class GameCreate(BaseModel):
    player_id: UUID4
    score: int = 0
    on_going: bool = True


class GameStatusUpdate(BaseModel):
    on_going: bool = False


class Game(GameCreate, CamelResponse):
    id: UUID4
    rounds: List[Round]


class GameCreateBody(BaseModel):
    user_id: UUID4


class GameUpdateBody(BaseModel):
    game_id: UUID4
    round: RoundCreate
