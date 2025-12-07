"""Pydantic models for request/response validation"""
from pydantic import BaseModel, EmailStr, Field


class ContactForm(BaseModel):
    name: str = Field(..., min_length=1, description="Имя отправителя")
    email: EmailStr = Field(..., description="Email отправителя")
    message: str = Field(..., min_length=1, description="Сообщение")


class HealthResponse(BaseModel):
    status: str
    message: str
    timestamp: str


class ContactResponse(BaseModel):
    success: bool
    message: str
    timestamp: str


class InfoResponse(BaseModel):
    name: str
    description: str
    version: str
    hackathon: str


class AnalyzeRequest(BaseModel):
    data: dict = Field(..., description="Данные для анализа")


class AnalyzeResponse(BaseModel):
    credit_score: int
    risk_level: str
    recommendations: list[str]
    cashflow_analysis: dict


class ChatMessageRequest(BaseModel):
    message: str = Field(..., min_length=1, description="Сообщение пользователя")


class ChatMessageResponse(BaseModel):
    answer: str
    source: str  # 'openai' or 'fallback'


class AskRequest(BaseModel):
    question: str = Field(..., min_length=1, description="Вопрос пользователя")


class AskResponse(BaseModel):
    answer: str

