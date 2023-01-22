from pydantic import BaseModel, UUID4
from typing import Optional

from app.schemas.schemas import CamelResponse


class TokenData(BaseModel):
    sub: UUID4 | None = None
    exp: Optional[str]


class Token(CamelResponse):
    access_token: str
    token_type: str
