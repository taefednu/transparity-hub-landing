# 🚀 Инструкция по деплою Transparity Hub

## Быстрый деплой за 30 минут

### Шаг 1: Подготовка репозитория

1. Инициализируйте Git (если еще не сделано):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Создайте репозиторий на GitHub:
   - Перейдите на [github.com](https://github.com)
   - Создайте новый репозиторий (например, `transparity-hub`)
   - Загрузите код:
```bash
git remote add origin https://github.com/YOUR_USERNAME/transparity-hub.git
git branch -M main
git push -u origin main
```

### Шаг 2: Деплой бекенда на Render (5 минут)

1. Зарегистрируйтесь на [render.com](https://render.com) (можно через GitHub)

2. Нажмите "New +" → "Web Service"

3. Подключите ваш GitHub репозиторий

4. Настройки:
   - **Name**: `transparity-hub-backend`
   - **Region**: Выберите ближайший (например, Frankfurt)
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

5. Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = оставьте пустым (Render сам назначит)
   - `FRONTEND_URL` = пока оставьте пустым, добавите после деплоя фронта

6. Нажмите "Create Web Service"

7. Дождитесь деплоя (2-3 минуты)

8. Скопируйте URL бекенда (например: `https://transparity-hub-backend.onrender.com`)

### Шаг 3: Деплой фронтенда на Vercel (5 минут)

1. Зарегистрируйтесь на [vercel.com](https://vercel.com) (можно через GitHub)

2. Нажмите "Add New..." → "Project"

3. Импортируйте ваш GitHub репозиторий

4. Настройки проекта:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

5. Environment Variables:
   - `VITE_API_URL` = URL вашего бекенда с Render (например: `https://transparity-hub-backend.onrender.com`)

6. Нажмите "Deploy"

7. Дождитесь деплоя (1-2 минуты)

8. Скопируйте URL фронтенда (например: `https://transparity-hub.vercel.app`)

### Шаг 4: Обновление переменных окружения

1. Вернитесь в Render → ваш бекенд сервис → Environment

2. Обновите `FRONTEND_URL` на URL вашего фронтенда с Vercel

3. Render автоматически перезапустит сервис

### Шаг 5: Проверка работы

1. Откройте URL фронтенда в браузере
2. Проверьте, что сайт загружается
3. Попробуйте отправить контактную форму
4. Проверьте бекенд: `https://your-backend.onrender.com/api/health`

## Альтернативные варианты деплоя

### Вариант A: Все на Render

1. Создайте два сервиса на Render:
   - **Web Service** для бекенда (как описано выше)
   - **Static Site** для фронтенда:
     - Root Directory: `frontend`
     - Build Command: `npm install && npm run build`
     - Publish Directory: `build`

### Вариант B: Netlify + Railway

**Фронтенд на Netlify:**
1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. "Add new site" → "Import an existing project"
3. Подключите GitHub репозиторий
4. Настройки:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `build`
5. Добавьте переменную: `VITE_API_URL` = URL бекенда

**Бекенд на Railway:**
1. Зарегистрируйтесь на [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Выберите репозиторий
4. Добавьте сервис → выберите репозиторий
5. Настройки:
   - Root Directory: `backend`
   - Start Command: `npm start`
6. Добавьте переменные окружения

## Бесплатные домены

### Получение бесплатного домена:

1. **Freenom** (бесплатные .tk, .ml, .ga, .cf домены):
   - Зайдите на [freenom.com](https://freenom.com)
   - Зарегистрируйтесь
   - Найдите и зарегистрируйте домен
   - Настройте DNS записи:
     - Для Vercel: добавьте CNAME запись на `cname.vercel-dns.com`
     - Для Render: добавьте CNAME запись на ваш сервис

2. **Cloudflare** (бесплатный DNS + можно купить дешевый домен):
   - Зарегистрируйтесь на [cloudflare.com](https://cloudflare.com)
   - Добавьте ваш домен
   - Настройте DNS записи

### Настройка кастомного домена на Vercel:

1. В настройках проекта Vercel → Domains
2. Добавьте ваш домен
3. Следуйте инструкциям по настройке DNS

### Настройка кастомного домена на Render:

1. В настройках сервиса Render → Settings → Custom Domains
2. Добавьте ваш домен
3. Настройте DNS записи согласно инструкциям

## Troubleshooting

### Проблема: CORS ошибки

**Решение**: Убедитесь, что `FRONTEND_URL` в бекенде правильно настроен и включает протокол (https://)

### Проблема: Фронтенд не может подключиться к бекенду

**Решение**: 
1. Проверьте переменную `VITE_API_URL` в Vercel
2. Убедитесь, что бекенд запущен (проверьте `/api/health`)
3. Проверьте CORS настройки в бекенде

### Проблема: Render сервис "засыпает" после 15 минут бездействия

**Решение**: 
- На бесплатном плане Render сервисы "засыпают" после неактивности
- Первый запрос после пробуждения может занять 30-60 секунд
- Для production рассмотрите платный план или используйте другой хостинг

### Проблема: Build ошибки

**Решение**:
1. Проверьте, что все зависимости указаны в `package.json`
2. Убедитесь, что Node.js версия совместима (>=18)
3. Проверьте логи билда в панели хостинга

## Мониторинг

- **Vercel**: Автоматические деплои при push в main ветку
- **Render**: Автоматические деплои при push в main ветку
- Проверяйте логи в панелях управления для отладки

## Следующие шаги

1. ✅ Деплой завершен
2. Настройте кастомный домен (опционально)
3. Настройте мониторинг и алерты
4. Добавьте аналитику (Google Analytics, Yandex Metrika)
5. Настройте CI/CD для автоматических деплоев

---

**Время деплоя**: ~30 минут  
**Стоимость**: Бесплатно (на бесплатных планах)

Удачи! 🚀

