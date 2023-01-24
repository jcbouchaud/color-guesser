docker-compose up --build -d
docker-compose exec server alembic revision --autogenerate
docker exec server alembic upgrade head
docker exec -it server python -m pytest
