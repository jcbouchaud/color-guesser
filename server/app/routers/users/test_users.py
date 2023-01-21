from fastapi.testclient import TestClient
from app.main import app
from app.schemas.users import UserCreate

client = TestClient(app)


def test_create_user():
    new_user = UserCreate(alias="root")
    response = client.post("/users/", content=new_user.json())
    assert response.status_code == 201
