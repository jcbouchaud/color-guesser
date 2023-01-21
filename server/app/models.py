from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    alias = Column(String, unique=True, index=True)
    games = relationship("Game", back_populates="player")
    best_score = Column(Integer, default=0)


class Game(Base):
    __tablename__ = "games"

    id = Column(Integer, primary_key=True, index=True)
    score = Column(Integer, default=0)
    on_going = Column(Boolean, default=False)
    player = relationship("User", back_populates="games")
    rounds = relationship("Round", back_populates="game")


class Round(Base):
    __tablename__ = "rounds"

    id = Column(Integer, primary_key=True, index=True)
    user_answer = Column(String)
    right_answer = Column(String)
    choices = Column(ARRAY(String))
    game = relationship("Game", back_populates="rounds")
