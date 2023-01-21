from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import databases
from .config import settings

SQLALCHEMY_DATABASE_URL = settings.db_url

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

database = databases.Database(settings.db_url)
metadata = MetaData()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
