from pydantic import UUID4
from sqlalchemy.orm import Session
from .base import BaseService
from app.models.games import Game as GameModel, Round as RoundModel
from app.models.users import User as UserModel
from app.schemas.games import GameCreate, RoundCreate, GameStatusUpdate


class GamesService(BaseService):
    def __init__(self, db_session: Session):
        super().__init__(GameModel, db_session)

    def create_game(self, user_id: UUID4):
        db_user = self.db_session.query(UserModel).get(user_id)
        db_game = self.create(GameCreate(player_id=db_user.id))
        return db_game

    def update_game(self, game_id: str, game_round: RoundCreate):
        db_game = self.get(game_id)
        db_round = RoundModel(game_round)
        db_game.rounds.append(game_round)

        user_id = db_game.player_id

        if game_round.user_answer == game_round.right_answer:
            db_game.score += 1
            db_user = self.db_session.query(UserModel).get(user_id)

            if db_game.score > db_user.best_score:
                db_user.best_score = db_game.score

            result = db_game

        else:
            self.update(GameStatusUpdate())
            new_db_game = self.create(GameCreate(player_id=user_id))
            result = new_db_game

        self.db_session.commit()
        return result


