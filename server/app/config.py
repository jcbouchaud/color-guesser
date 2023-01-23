from pydantic import BaseSettings, PostgresDsn


class Settings(BaseSettings):
    DATABASE_URL: PostgresDsn
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 600


settings = Settings()
