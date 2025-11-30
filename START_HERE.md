# 🚀 Transparity Hub - Начните здесь!

## Что готово:

✅ **Минимальный бекенд** (Express.js) без БД  
✅ **Интеграция фронтенд-бекенд** (контактная форма)  
✅ **Конфигурация для деплоя** (Vercel + Render)  
✅ **Полная документация** по деплою  

## Быстрый деплой (30 минут):

### 1. GitHub (5 мин)
```bash
git init
git add .
git commit -m "Initial commit"
# Создайте репозиторий на github.com
git remote add origin https://github.com/YOUR_USERNAME/transparity-hub.git
git push -u origin main
```

### 2. Бекенд на Render (10 мин)
- Зайдите на [render.com](https://render.com)
- New + → Web Service
- Root: `backend`
- Build: `npm install`
- Start: `npm start`
- **Скопируйте URL бекенда**

### 3. Фронтенд на Vercel (10 мин)
- Зайдите на [vercel.com](https://vercel.com)
- Add New → Project
- Root: `frontend`
- Build: `npm run build`
- Output: `build`
- **Добавьте переменную**: `VITE_API_URL` = URL бекенда
- **Скопируйте URL фронтенда**

### 4. Обновите бекенд (2 мин)
- В Render добавьте: `FRONTEND_URL` = URL фронтенда

### 5. Готово! ✅

---

## 📚 Документация:

- **[QUICK_START.md](./QUICK_START.md)** - Пошаговая инструкция
- **[DEPLOY.md](./DEPLOY.md)** - Подробное руководство + troubleshooting
- **[CHECKLIST.md](./CHECKLIST.md)** - Чеклист для деплоя
- **[README.md](./README.md)** - Общая информация

## 🛠 Локальная разработка:

```bash
# Установка
npm run install:all

# Фронтенд (порт 3000)
npm run dev

# Бекенд (порт 5000, в отдельном терминале)
npm run start:backend
```

## 📡 API Endpoints:

- `GET /api/health` - Health check
- `GET /api/info` - Информация о проекте
- `POST /api/contact` - Контактная форма

## ⚡ Важно:

- На бесплатном Render сервисы "засыпают" после 15 мин бездействия
- Первый запрос после пробуждения может занять 30-60 сек
- Для production рассмотрите платный план

---

**Время деплоя**: ~30 минут  
**Стоимость**: Бесплатно  

Удачи! 🎉

