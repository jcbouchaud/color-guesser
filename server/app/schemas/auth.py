from pydantic import BaseModel, UUID4
from typing import Optional


class TokenData(BaseModel):
    sub: UUID4 | None = None
    exp: Optional[str]


class Token(BaseModel):
    access_token: str
    token_type: str
