"""Main FastAPI application"""
from fastapi import FastAPI, Request, Response
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

# CORS configuration - must be added before routers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for now, can be restricted in production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],
    expose_headers=["*"],
    max_age=3600,
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
