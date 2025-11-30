# Transparity Hub

Кредитный Паспорт МСБ для банков и финтеха Узбекистана

**AI500 Hackathon (Agrobank) • 2024**

## 🚀 Быстрый старт

### Локальная разработка

```bash
# Установка всех зависимостей
npm run install:all

# Запуск фронтенда (порт 3000)
npm run dev

# Запуск бекенда (порт 5000, в отдельном терминале)
npm run start:backend
```

## 📁 Структура проекта

```
.
├── frontend/          # React + Vite фронтенд
├── backend/          # Express.js бекенд
└── README.md
```

## 🌐 Деплой

### Вариант 1: Vercel (Фронтенд) + Render (Бекенд) - Рекомендуется

#### Фронтенд на Vercel:

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Подключите GitHub репозиторий
3. Настройки проекта:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
4. Добавьте переменную окружения:
   - `VITE_API_URL` = URL вашего бекенда на Render

#### Бекенд на Render:

1. Зарегистрируйтесь на [render.com](https://render.com)
2. Создайте новый **Web Service**
3. Подключите GitHub репозиторий
4. Настройки:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
5. Добавьте переменные окружения:
   - `PORT` = `5000` (или оставьте пустым, Render сам назначит)
   - `FRONTEND_URL` = URL вашего фронтенда на Vercel
   - `NODE_ENV` = `production`

### Вариант 2: Все на Render

1. Создайте два сервиса на Render:
   - **Static Site** для фронтенда (Root: `frontend`, Build: `npm run build`, Publish: `build`)
   - **Web Service** для бекенда (как описано выше)

### Вариант 3: Netlify (Фронтенд) + Railway (Бекенд)

#### Фронтенд на Netlify:
- Root: `frontend`
- Build command: `npm run build`
- Publish directory: `build`

#### Бекенд на Railway:
- Подключите репозиторий
- Root: `backend`
- Start command: `npm start`

## 🔗 Бесплатные домены

После деплоя вы получите бесплатные поддомены:
- **Vercel**: `your-project.vercel.app`
- **Render**: `your-service.onrender.com`
- **Netlify**: `your-project.netlify.app`

Для кастомного домена:
- **Freenom** (бесплатные .tk, .ml, .ga домены)
- **Cloudflare** (бесплатный DNS + можно купить дешевый домен)

## 📡 API Endpoints

- `GET /api/health` - Проверка работоспособности
- `GET /api/info` - Информация о проекте
- `POST /api/contact` - Отправка контактной формы

## 🛠 Технологии

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Radix UI

**Backend:**
- Node.js
- Express.js
- CORS

## 📝 Лицензия

© 2024 Transparity Hub. Все права защищены.

