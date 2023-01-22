import pytest
from datetime import timedelta
from faker import Faker

from app.dependencies.auth import get_password_hash, create_access_token
from app.schemas.games import RoundCreate
from app.schemas.users import UserCreate
from app.services.users import UsersService
from app.services.games import GamesService
from app.services.database import SessionLocal


@pytest.fixture
def session():
    yield SessionLocal()


@pytest.fixture
def fake_alias():
    alias = Faker().first_name()
    yield alias


@pytest.fixture
def password():
    yield "password"


@pytest.fixture
def fake_user(fake_alias, password, session):
    new_user = UserCreate(alias=fake_alias, password=get_password_hash(password))
    service = UsersService(session)
    user_db = service.create(new_user)
    yield user_db


@pytest.fixture
def fake_user_token(fake_user):
    access_token_expires = timedelta(minutes=1)
    yield f"Bearer {create_access_token(sub=fake_user.id, expires_delta=access_token_expires)}"


@pytest.fixture
def fake_game(fake_user, session):
    service = GamesService(session)
    game_db = service.create_game(fake_user.id)
    yield game_db


@pytest.fixture
def fake_won_round():
    game_round = RoundCreate(user_answer="foo", right_answer="foo", choices=["foo", "bar"])
    yield game_round


@pytest.fixture
def fake_lost_round():
    game_round = RoundCreate(user_answer="foo", right_answer="bar", choices=["foo", "bar"])
    yield game_round
