"""Main FastAPI application"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import (
    APP_NAME, APP_DESCRIPTION, APP_VERSION,
    ALLOWED_ORIGINS, PORT
)
from app.routes.api import router as api_router

app = FastAPI(
    title=APP_NAME,
    description=APP_DESCRIPTION,
    version=APP_VERSION
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(api_router)


@app.get("/")
async def root():
    """Root endpoint"""
    return {"message": "Transparity Hub API", "docs": "/docs"}


if __name__ == "__main__":
    import uvicorn
    from app.config import PORT
    uvicorn.run(app, host="0.0.0.0", port=PORT)
