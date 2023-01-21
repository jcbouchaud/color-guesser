from pydantic import UUID4, BaseModel
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.services.database import get_db
from app.schemas.games import GameCreateBody, GameUpdateBody
from app.schemas.users import Game
from app.services.games import GamesService


router = APIRouter(tags=["users"])


@router.post("/games/", status_code=201, response_model=Game)
def create_game(body:  GameCreateBody, db: Session = Depends(get_db)):
    service = GamesService(db)
    return service.create_game(body.user_id)


@router.patch("/games/", status_code=200, response_model=Game)
def update_game(body:  GameUpdateBody, db: Session = Depends(get_db)):
    service = GamesService(db)
    return service.update_game(body.game_id, body.round)
