import json
from faker import Faker
from fastapi.testclient import TestClient

from app.main import app
from app.schemas.games import GameCreateBody, GameUpdateBody, Game
from app.schemas.users import User, AuthenticatedUser


client = TestClient(app)


def test_get_user(fake_user, fake_user_token):
    response = client.get(f"/users/{fake_user.id}/", headers={"Authorization": fake_user_token})

    assert response.status_code == 200
    assert User.parse_obj(response.json())


def test_create_game(fake_user, fake_user_token):
    content = GameCreateBody(user_id=fake_user.id).json()
    response = client.post(f"/games/", content=content, headers={"Authorization": fake_user_token})

    assert response.status_code == 201
    assert Game.parse_obj(response.json())


def test_update_game_won_round(fake_user_token, fake_game, fake_won_round):
    content = GameUpdateBody(game_id=fake_game.id, round=fake_won_round).json()
    response = client.patch(f"/games/", content=content, headers={"Authorization": fake_user_token})
    updated_game = Game.parse_obj(response.json())

    assert response.status_code == 200
    assert fake_game.id == updated_game.id
    assert updated_game.score == 1


def test_update_game_lost_round(fake_user_token, fake_game, fake_lost_round):
    content = GameUpdateBody(game_id=fake_game.id, round=fake_lost_round).json()
    response = client.patch(f"/games/", content=content, headers={"Authorization": fake_user_token})
    updated_game = Game.parse_obj(response.json())

    assert response.status_code == 200
    assert fake_game.id != updated_game.id
    assert updated_game.score == 0


def test_login(fake_user, password):
    response = client.post("/auth/login/", data={"username": fake_user.username, "password": password}, headers={"Content-Type": "application/x-www-form-urlencoded"})

    assert response.status_code == 200
    assert AuthenticatedUser.parse_obj(response.json())


def test_register(password):
    new_user = json.dumps({"username": Faker().first_name(), "password": password})
    response = client.post("/auth/register/", content=new_user)

    assert response.status_code == 201
    assert AuthenticatedUser.parse_obj(response.json())
