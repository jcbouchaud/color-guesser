docker exec server alembic upgrade head
docker-compose exec server alembic revision --autogenerate -m "First migration"