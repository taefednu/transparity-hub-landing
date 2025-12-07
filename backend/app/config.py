"""Configuration settings for the application"""
import os
from dotenv import load_dotenv

load_dotenv()

# Server settings
PORT = int(os.getenv("PORT", 5000))
HOST = os.getenv("HOST", "0.0.0.0")

# CORS settings
FRONTEND_URL = os.getenv(
    'FRONTEND_URL', 
    'http://localhost:3000,http://localhost:5173'
)
ALLOWED_ORIGINS = FRONTEND_URL.split(',')

# App settings
APP_NAME = "Transparity Hub API"
APP_DESCRIPTION = "Кредитный Паспорт МСБ для банков и финтеха Узбекистана"
APP_VERSION = "1.0.0"

# OpenAI settings
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")

