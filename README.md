# Transparity Hub

Кредитный Паспорт МСБ для банков и финтеха Узбекистана

**AI500 Hackathon (Agrobank) • 2024**

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm run install:all

# Запуск фронтенда (порт 3000)
npm run dev

# Запуск бекенда (порт 5000)
npm run start:backend
```

## 🌐 Деплой

### Vercel (Фронтенд)
1. Подключите GitHub репозиторий на [vercel.com](https://vercel.com)
2. Настройки: **Root Directory** = `frontend`, **Output Directory** = `build`

### Render (Бекенд)
1. Создайте Web Service на [render.com](https://render.com)
2. Настройки: **Root Directory** = `backend`, **Start Command** = `npm start`

## 🛠 Технологии

- **Frontend**: React 18, Vite, Tailwind CSS, Radix UI
- **Backend**: Node.js, Express.js

## 📡 API

- `GET /api/health` - Health check
- `GET /api/info` - Project info
- `POST /api/contact` - Contact form

