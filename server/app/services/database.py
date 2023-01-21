from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker
import databases
from app.config import settings

SQLALCHEMY_DATABASE_URL = settings.db_url

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

database = databases.Database(settings.db_url)
metadata = MetaData()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
