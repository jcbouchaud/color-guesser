from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers.users import routes as users_routes
from .routers.games import routes as games_routes
from app.services.database import database

app = FastAPI()
app.include_router(users_routes.router)
app.include_router(games_routes.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    if not database.is_connected:
        await database.connect()


@app.on_event("shutdown")
async def shutdown():
    if database.is_connected:
        await database.disconnect()
