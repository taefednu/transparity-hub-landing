"""API routes"""
from datetime import datetime
from fastapi import APIRouter
import openai
from app.models import (
    HealthResponse, ContactResponse, InfoResponse,
    AnalyzeRequest, AnalyzeResponse, ContactForm,
    ChatMessageRequest, ChatMessageResponse,
    AskRequest, AskResponse
)
from app.config import OPENAI_API_KEY

router = APIRouter(prefix="/api", tags=["api"])


@router.get("/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint"""
    return {
        "status": "ok",
        "message": "Transparity Hub API is running",
        "timestamp": datetime.now().isoformat()
    }


@router.post("/contact", response_model=ContactResponse)
async def submit_contact(contact: ContactForm):
    """Submit contact form"""
    # Basic validation is handled by Pydantic
    # In production, you'd send email or save to DB here
    print(f"Contact form submission: {contact.name}, {contact.email}, {contact.message}")
    
    return {
        "success": True,
        "message": "Спасибо за обращение! Мы свяжемся с вами в ближайшее время.",
        "timestamp": datetime.now().isoformat()
    }


@router.get("/info", response_model=InfoResponse)
async def get_info():
    """Get site information"""
    return {
        "name": "Transparity Hub",
        "description": "Кредитный Паспорт МСБ для банков и финтеха Узбекистана",
        "version": "1.0.0",
        "hackathon": "AI500 Hackathon (Agrobank) 2024"
    }


@router.post("/analyze", response_model=AnalyzeResponse)
async def analyze_data(request: AnalyzeRequest):
    """AI classification endpoint for analyzing financial data"""
    # Mock AI analysis - in production, this would use actual ML models
    transactions = request.data.get("transactions", [])
    balance_history = request.data.get("balance_history", [])
    
    # Simulate AI analysis
    transaction_count = len(transactions) if isinstance(transactions, list) else 0
    balance_count = len(balance_history) if isinstance(balance_history, list) else 0
    
    # Calculate mock credit score (0-100)
    base_score = 70
    if transaction_count > 50:
        base_score += 10
    if balance_count > 30:
        base_score += 5
    
    credit_score = min(100, max(0, base_score))
    
    # Determine risk level
    if credit_score >= 80:
        risk_level = "low"
        recommendations = [
            "Отличный кредитный профиль. Рекомендуется одобрение кредита.",
            "Стабильный cashflow. Можно рассмотреть увеличение лимита.",
            "Низкий уровень риска. Подходит для долгосрочного финансирования."
        ]
    elif credit_score >= 60:
        risk_level = "medium"
        recommendations = [
            "Умеренный уровень риска. Рекомендуется дополнительная проверка.",
            "Cashflow стабилен, но требует мониторинга.",
            "Рассмотреть кредит с ограниченным лимитом."
        ]
    else:
        risk_level = "high"
        recommendations = [
            "Высокий уровень риска. Требуется дополнительный анализ.",
            "Нестабильный cashflow. Рекомендуется отложить решение.",
            "Необходимо предоставить дополнительные документы."
        ]
    
    cashflow_analysis = {
        "average_monthly_income": 5000000,
        "average_monthly_expenses": 3500000,
        "net_cashflow": 1500000,
        "volatility": "low" if credit_score >= 70 else "medium",
        "trend": "positive",
        "transaction_pattern": "regular"
    }
    
    return {
        "credit_score": credit_score,
        "risk_level": risk_level,
        "recommendations": recommendations,
        "cashflow_analysis": cashflow_analysis
    }


# System prompt with full information about Transparity Hub
SYSTEM_PROMPT = """Ты - AI-ассистент платформы Transparity Hub, кредитной инфраструктурной платформы для МСБ в Узбекистане.

ИНФОРМАЦИЯ О ПРОЕКТЕ:

Transparity Hub - это AI-driven кредитная инфраструктурная платформа, решающая ключевую структурную проблему развивающихся рынков: отсутствие реальных операционных данных для оценки кредитоспособности МСБ (малых и средних предприятий).

ПРОБЛЕМА:
Сектор МСБ Узбекистана составляет почти половину ВВП, но недофинансирован более чем на $11.8 млрд. Корневая причина — отсутствие доверенных данных. МСБ работают через фрагментированные цифровые каналы, банки получают частичные данные и считают МСБ высокорискованными по умолчанию. Результат: высокие проценты отказов, завышенные ставки, длительные сроки одобрения, ограниченный доступ к капиталу.

РЕШЕНИЕ:
Transparity Hub создаёт единый источник финансовой правды для МСБ, консолидируя операционные данные и используя AI для производства:
- Единого кредитного паспорта
- Объяснимой оценки рисков (XAI с SHAP)
- Прогнозирующих прогнозов cashflow (3-6 месяцев)
- Прозрачных драйверов кредитоспособности
- Автоматических рекомендаций

ФУНКЦИОНАЛ:
1. Банковский дашборд (13 страниц):
   - Портфельный интеллект в реальном времени
   - AI-инсайты и ранние предупреждения
   - Карта рисков и автоматическая сегментация
   - AI-рекомендации по лимитам и ценообразованию
   - Стресс-тестирование сценариев
   
2. МСБ дашборд (6 страниц):
   - Цифровой Кредитный Паспорт
   - Аналитика cashflow с прогнозированием
   - AI-инсайты для улучшения кредитоспособности
   - What-If симулятор
   - AI-ассистент на естественном языке

ТЕХНОЛОГИИ:
Frontend & Backend:
- Next.js, React 18, TypeScript
- Node.js / Express, Python FastAPI
- PostgreSQL, Docker микросервисы
- Vercel, облачная инфраструктура

AI & Data Science:
- Cashflow Risk Scoring (Gradient boosted)
- Time-Series Forecasting (Prophet/ARIMA/LSTM)
- Explainable AI (SHAP-based)
- AI Recommendation Engine
- LLM Assistant

ИНТЕГРАЦИИ:
Payme, Click, Uzum, банковские API, системы учёта, кредитное бюро. Все профили обновляются автоматически - без ручного ввода данных.

СТАТУС:
Работающий MVP с банковским и МСБ дашбордами, AI-моделями, интеграциями.

СЛЕДУЮЩИЕ ШАГИ:
- Интеграция живых потоков транзакций
- Обучение моделей на реальных данных
- Калибровка для регуляторных требований
- Пилот с Agrobank
- Расширение на регион

КОНТЕКСТ ХАКАТОНА:
Проект создан для AI500 Hackathon (Agrobank) • 2024/2025.

ВАЖНЫЕ ПРАВИЛА:
1. Отвечай ТОЛЬКО на вопросы о платформе Transparity Hub, проекте, технологиях, команде, хакатоне
2. НЕ используй символ "*" в ответах
3. Будь информативным, но кратким
4. Если вопрос не про проект - вежливо скажи, что отвечаешь только про Transparity Hub
5. Используй конкретные факты и цифры из предоставленной информации
6. Говори дружелюбно, но профессионально"""


@router.post("/chat", response_model=ChatMessageResponse)
async def chat_with_bot(request: ChatMessageRequest):
    """AI chat endpoint for answering questions about Transparity Hub"""
    try:
        if not OPENAI_API_KEY:
            # Fallback response if OpenAI key is not configured
            fallback_responses = {
                "что делает ваш проект": "Transparity Hub — это AI-driven кредитная инфраструктурная платформа, которая решает проблему недофинансирования МСБ в Узбекистане ($11.8 млрд пробел). Платформа создаёт единый источник финансовой правды, консолидируя операционные данные и используя AI для производства кредитных паспортов, оценки рисков и прогнозирования cashflow.",
                "для кого предназначен": "Продукт создан для банков и МСБ (малых и средних предприятий) Узбекистана. Банки получают инструменты для оценки кредитоспособности МСБ на основе реальных операционных данных, а МСБ получают прозрачный кредитный профиль и доступ к лучшим условиям финансирования.",
                "технологии": "Frontend: Next.js, React 18, TypeScript. Backend: Python FastAPI, Node.js/Express. AI: Gradient Boosting для скоринга, Prophet/ARIMA/LSTM для прогнозирования, SHAP для объяснимости, LLM для ассистента.",
                "как работает": "Платформа интегрируется с платежными системами (Payme, Click, Uzum) и банками, собирает операционные данные МСБ, применяет AI-модели для оценки рисков и прогнозирования, предоставляет банкам и МСБ персонализированные дашборды и рекомендации.",
                "интеграции": "Платформа интегрируется с Payme, Click, Uzum, банковскими API, системами учёта и кредитным бюро. Все профили обновляются автоматически без ручного ввода данных.",
                "следующие шаги": "Следующие шаги: интеграция живых потоков транзакций, обучение моделей на реальных данных, калибровка для регуляторных требований, пилот с Agrobank, расширение на регион."
            }
            
            message_lower = request.message.lower()
            for key, response in fallback_responses.items():
                if key in message_lower:
                    return {
                        "answer": response,
                        "source": "fallback"
                    }
            
            return {
                "answer": "Я могу ответить на вопросы о платформе Transparity Hub. Спросите о функционале, технологиях, проблеме, которую решаем, или следующем шагах развития.",
                "source": "fallback"
            }
        
        # Initialize OpenAI client
        client = openai.OpenAI(api_key=OPENAI_API_KEY)
        
        # Call OpenAI API
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": request.message}
            ],
            temperature=0.7,
            max_tokens=1000
        )
        
        answer = response.choices[0].message.content.strip()
        
        # Replace any asterisks with dashes
        answer = answer.replace("*", "-")
        
        return {
            "answer": answer,
            "source": "openai"
        }
    
    except Exception as e:
        # Fallback on error
        error_message = str(e)
        return {
            "answer": f"Извините, произошла ошибка при обработке запроса. Попробуйте переформулировать вопрос о платформе Transparity Hub. {error_message if 'rate limit' not in error_message.lower() else ''}",
            "source": "fallback"
        }


@router.post("/ask", response_model=AskResponse)
async def ask_question(request: AskRequest):
    """AI-powered endpoint for answering questions about the project"""
    try:
        if not OPENAI_API_KEY:
            # Fallback response if OpenAI key is not configured
            fallback_responses = {
                "как ваш проект использует ai": "Наш проект использует AI для анализа данных и генерации рекомендаций. Transparity Hub применяет AI-модели для оценки кредитоспособности МСБ: Gradient Boosting для скоринга рисков, Prophet/ARIMA/LSTM для прогнозирования cashflow, SHAP для объяснимости решений и LLM для ассистента на естественном языке.",
                "что делает ваш проект": "Transparity Hub — это AI-driven кредитная инфраструктурная платформа, которая решает проблему недофинансирования МСБ в Узбекистане ($11.8 млрд пробел). Платформа создаёт единый источник финансовой правды, консолидируя операционные данные и используя AI для производства кредитных паспортов, оценки рисков и прогнозирования cashflow.",
                "для кого предназначен": "Продукт создан для банков и МСБ (малых и средних предприятий) Узбекистана. Банки получают инструменты для оценки кредитоспособности МСБ на основе реальных операционных данных, а МСБ получают прозрачный кредитный профиль и доступ к лучшим условиям финансирования.",
                "технологии": "Frontend: Next.js, React 18, TypeScript. Backend: Python FastAPI, Node.js/Express. AI: Gradient Boosting для скоринга, Prophet/ARIMA/LSTM для прогнозирования, SHAP для объяснимости, LLM для ассистента.",
                "как работает": "Платформа интегрируется с платежными системами (Payme, Click, Uzum) и банками, собирает операционные данные МСБ, применяет AI-модели для оценки рисков и прогнозирования, предоставляет банкам и МСБ персонализированные дашборды и рекомендации.",
                "интеграции": "Платформа интегрируется с Payme, Click, Uzum, банковскими API, системами учёта и кредитным бюро. Все профили обновляются автоматически без ручного ввода данных.",
                "следующие шаги": "Следующие шаги: интеграция живых потоков транзакций, обучение моделей на реальных данных, калибровка для регуляторных требований, пилот с Agrobank, расширение на регион."
            }
            
            question_lower = request.question.lower()
            for key, response in fallback_responses.items():
                if key in question_lower:
                    return {
                        "answer": response
                    }
            
            return {
                "answer": "Я могу ответить на вопросы о платформе Transparity Hub. Спросите о функционале, технологиях, проблеме, которую решаем, или следующем шагах развития."
            }
        
        # Initialize OpenAI client
        client = openai.OpenAI(api_key=OPENAI_API_KEY)
        
        # Call OpenAI API
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": request.question}
            ],
            temperature=0.7,
            max_tokens=1000
        )
        
        answer = response.choices[0].message.content.strip()
        
        # Replace any asterisks with dashes
        answer = answer.replace("*", "-")
        
        return {
            "answer": answer
        }
    
    except Exception as e:
        # Fallback on error
        error_message = str(e)
        return {
            "answer": f"Извините, произошла ошибка при обработке запроса. Попробуйте переформулировать вопрос о платформе Transparity Hub. {error_message if 'rate limit' not in error_message.lower() else ''}"
        }

