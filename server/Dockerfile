FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11
WORKDIR /code

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade pip -r /code/requirements.txt

COPY ./app /code/app
COPY ./tests /code/tests
COPY ./alembic.ini /code/alembic.ini
COPY ./alembic /code/alembic

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]