# Transparity Hub

Кредитный Паспорт МСБ для банков и финтеха Узбекистана

**AI500 Hackathon (Agrobank) • 2024**

## 🚀 Быстрый старт

### Frontend
```bash
# Установка зависимостей
npm run install:all

# Запуск фронтенда (порт 5173)
npm run dev
```

### Backend
```bash
# Перейдите в директорию бекенда
cd backend

# Создайте виртуальное окружение (если еще не создано)
python -m venv venv
source venv/bin/activate  # Linux/Mac
# или
venv\Scripts\activate  # Windows

# Установите зависимости
pip install -r requirements.txt

# Запуск бекенда (порт 5000)
cd backend
uvicorn app.main:app --reload --port 5000
# или
python -m app.main
```

## 🌐 Деплой

### Vercel (Фронтенд)
1. Подключите GitHub репозиторий на [vercel.com](https://vercel.com)
2. Настройки: **Root Directory** = `frontend`, **Output Directory** = `build`

### Render (Бекенд)
1. Создайте Web Service на [render.com](https://render.com)
2. Настройки: **Root Directory** = `backend`, **Start Command** = `uvicorn main:app --host 0.0.0.0 --port $PORT`
3. Или используйте `render.yaml` для автоматической настройки

## 🛠 Технологии

- **Frontend**: React 18, Vite, Tailwind CSS, Radix UI
- **Backend**: Python, FastAPI, Uvicorn

## 📡 API

- `GET /api/health` - Health check
- `GET /api/info` - Project info
- `POST /api/contact` - Contact form

