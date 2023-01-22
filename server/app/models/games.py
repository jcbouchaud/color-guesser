import uuid
from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.dialects.postgresql import ARRAY, UUID
from sqlalchemy.orm import relationship
from .base import Base
from .users import *


class Game(Base):
    __tablename__ = "games"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid.uuid4)
    score = Column(Integer, default=0)
    on_going = Column(Boolean, default=False)
    player_id = Column(ForeignKey("users.id"))
    player = relationship("User", back_populates="games")
    rounds = relationship("Round", back_populates="game", cascade="all, delete-orphan")


class Round(Base):
    __tablename__ = "rounds"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid.uuid4)
    user_answer = Column(String)
    right_answer = Column(String)
    choices = Column(ARRAY(String))
    game_id = Column(ForeignKey("games.id"))
    game = relationship("Game", back_populates="rounds")
