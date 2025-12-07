# Transparity Hub Backend API

Backend API для проекта Transparity Hub, построенный на FastAPI.

## Установка

1. Убедитесь, что у вас установлен Python 3.9+

2. Создайте виртуальное окружение:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# или
venv\Scripts\activate  # Windows
```

3. Установите зависимости:
```bash
pip install -r requirements.txt
```

## Запуск

### Локальная разработка (рекомендуется)
```bash
# Перейдите в директорию backend
cd backend

# Активируйте виртуальное окружение (если используете)
source venv/bin/activate  # Linux/Mac
# или
venv\Scripts\activate  # Windows

# Запустите сервер с автоперезагрузкой
uvicorn app.main:app --reload --port 5000
```

Сервер будет доступен на `http://localhost:5000`
- API документация: `http://localhost:5000/docs`
- ReDoc: `http://localhost:5000/redoc`

### Альтернативные способы запуска

**Через Python модуль:**
```bash
cd backend
python -m uvicorn app.main:app --reload --port 5000
```

**Через прямой запуск (если настроено в main.py):**
```bash
cd backend
python -m app.main
```

### Продакшн
```bash
cd backend
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

## Переменные окружения

Создайте файл `.env` в директории `backend/` (скопируйте из `.env.example`):

```env
PORT=5000
FRONTEND_URL=http://localhost:3000,http://localhost:5173
```


## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Отправка контактной формы
- `GET /api/info` - Информация о сайте
- `GET /docs` - Swagger документация
- `GET /redoc` - ReDoc документация

## Структура запросов

### POST /api/contact
```json
{
  "name": "Имя",
  "email": "email@example.com",
  "message": "Текст сообщения"
}
```
