from fastapi import APIRouter


router = APIRouter(prefix="/auth", tags=["auth"])


@router.get("/authenticate/")
async def authenticate():
    return {"status": "Not authenticated"}
