import uuid
from sqlalchemy import Column, String, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from .base import Base
from .games import *


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid.uuid4)
    alias = Column(String, unique=True, index=True)
    games = relationship("Game", back_populates="player", cascade="all, delete-orphan")
    best_score = Column(Integer, default=0)
    password = Column(String)
