import json
from fastapi.testclient import TestClient
from app.main import app
from app.schemas.users import UserCreate
from app.models.users import User as UserModel
from app.services.base import BaseService

from app.services.database import SessionLocal

client = TestClient(app)


import random
import string


def get_random_string():
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(10))
    return result_str


def test_create_game():
    new_user = UserCreate(alias=get_random_string())
    service = BaseService(UserModel, SessionLocal())
    user_db = service.create(new_user)
    response = client.post(f"/games/", content=json.dumps({"user_id": str(user_db.id)}))
    assert response.status_code == 201
