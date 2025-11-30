# ⚡ Быстрый старт - Деплой за 30 минут

## Что нужно сделать:

### 1. GitHub репозиторий (5 мин)
```bash
git init
git add .
git commit -m "Initial commit"
# Создайте репозиторий на github.com и выполните:
git remote add origin https://github.com/YOUR_USERNAME/transparity-hub.git
git push -u origin main
```

### 2. Деплой бекенда на Render (10 мин)

1. Зайдите на [render.com](https://render.com) → Sign Up (через GitHub)
2. New + → Web Service
3. Подключите ваш GitHub репозиторий
4. Настройки:
   - **Name**: `transparity-hub-backend`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
5. Environment Variables:
   - `NODE_ENV` = `production`
   - `FRONTEND_URL` = (оставьте пустым пока)
6. Create Web Service
7. **Скопируйте URL бекенда** (например: `https://transparity-hub-backend.onrender.com`)

### 3. Деплой фронтенда на Vercel (10 мин)

1. Зайдите на [vercel.com](https://vercel.com) → Sign Up (через GitHub)
2. Add New... → Project
3. Импортируйте ваш GitHub репозиторий
4. Настройки:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Environment Variables:
   - `VITE_API_URL` = URL вашего бекенда (из шага 2)
6. Deploy
7. **Скопируйте URL фронтенда** (например: `https://transparity-hub.vercel.app`)

### 4. Обновите бекенд (2 мин)

1. Вернитесь в Render → ваш бекенд → Environment
2. Добавьте/обновите: `FRONTEND_URL` = URL вашего фронтенда (из шага 3)
3. Render автоматически перезапустит сервис

### 5. Готово! ✅

Откройте URL фронтенда в браузере и проверьте работу.

---

## Проверка работы:

- Фронтенд: `https://your-frontend.vercel.app`
- Бекенд health check: `https://your-backend.onrender.com/api/health`
- Попробуйте отправить контактную форму

## Проблемы?

См. [DEPLOY.md](./DEPLOY.md) для подробных инструкций и troubleshooting.

---

**Время**: ~30 минут  
**Стоимость**: Бесплатно

