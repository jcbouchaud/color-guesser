from pydantic import UUID4, BaseModel
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.services.database import get_db
from app.schemas.games import RoundCreate
from app.schemas.users import Game
from app.services.games import GamesService


router = APIRouter(tags=["users"])


class CreateGameBody(BaseModel):
    user_id: str


class UpdateGameBody(BaseModel):
    game_id: str
    round: RoundCreate


@router.post("/games/", status_code=201, response_model=Game)
def create_game(body:  CreateGameBody, db: Session = Depends(get_db)):
    service = GamesService(db)
    return service.create_game(body.user_id)


@router.patch("/games/", status_code=200, response_model=Game)
def update_game(body:  UpdateGameBody, db: Session = Depends(get_db)):
    service = GamesService(db)
    return service.update_game(body.game_id, body.round)
