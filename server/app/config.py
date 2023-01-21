from pydantic import BaseSettings, PostgresDsn


class Settings(BaseSettings):
    db_url: PostgresDsn

    class Config:
        fields = {
            'db_url': {
                'env': 'DATABASE_URL',
            },
        }


settings = Settings()
