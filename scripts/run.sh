docker-compose down -v
docker-compose up --build -d
docker-compose exec server alembic revision --autogenerate
docker exec server alembic upgrade head
