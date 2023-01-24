# Welcome to Color-guesser !

## Setup

> docker-compose up --build -d\
> docker-compose exec server alembic revision --autogenerate\
> docker exec server alembic upgrade head

React app is running on *localhost:3000*

## Scripts

Run */scripts/run.py* to build de whole app from scratch (kills volumes)\
Run */scripts/test.py* does the same + runs tests

## Db admin

pgadmin is running on *localhost:3000*\
*email: admin@pgadmin.org, pwd: admin*

## API docs

Swagger UI on *localhost:8000/docs*
