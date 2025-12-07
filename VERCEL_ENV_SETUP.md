# Настройка переменных окружения для Vercel

## Проблемы и решения

### 1. Чат-бот не работает

**Проблема:** Чат-бот использует `VITE_API_URL` для подключения к бекенду.

**Решение:**
1. Откройте проект на Vercel
2. Перейдите в **Settings → Environment Variables**
3. Добавьте переменную:
   - **Name:** `VITE_API_URL`
   - **Value:** URL вашего бекенда (например, `https://your-backend.onrender.com` или `https://your-backend.railway.app`)
   - **Environment:** Production, Preview, Development (выберите все)

### 2. CORS ошибки

**Проблема:** Бекенд блокирует запросы с фронтенда из-за CORS.

**Решение:**
В настройках бекенда (Render/Railway) добавьте переменную окружения:
- **Name:** `FRONTEND_URL`
- **Value:** `https://transparity-hub-landing-vercel-mbdf.vercel.app` (ваш URL на Vercel)
- Можно добавить несколько URL через запятую: `https://transparity-hub-landing-vercel-mbdf.vercel.app,https://your-custom-domain.com`

### 3. Видео не загружается

**Проблема:** Vercel не поддерживает Git LFS автоматически.

**Решения:**

#### Вариант A: Использовать внешний хостинг (РЕКОМЕНДУЕТСЯ)
1. Загрузите видео на:
   - YouTube (бесплатно, встроить через iframe)
   - Cloudinary (бесплатный план 25GB)
   - Vercel Blob Storage
2. Обновите `frontend/src/pages/DemoPage.tsx`:
   ```tsx
   <source src="https://your-cdn.com/demo-video.mp4" type="video/mp4" />
   ```

#### Вариант B: Использовать GitHub Releases
1. Создайте Release на GitHub
2. Загрузите видео как Release Asset
3. Используйте прямой URL к файлу

## Чек-лист переменных окружения

### Vercel (Frontend):
- ✅ `VITE_API_URL` = URL вашего бекенда

### Backend (Render/Railway):
- ✅ `FRONTEND_URL` = URL вашего фронтенда на Vercel
- ✅ `OPENAI_API_KEY` = ваш ключ OpenAI (если используется)
- ✅ `PORT` = обычно устанавливается автоматически

## Проверка работы

1. **Чат-бот:**
   - Откройте консоль браузера (F12)
   - Попробуйте отправить сообщение
   - Проверьте, нет ли ошибок CORS или 404

2. **Видео:**
   - Откройте `/demo` страницу
   - Проверьте Network tab в консоли браузера
   - Убедитесь, что запрос к видео возвращает 200, а не 404

3. **API:**
   - Проверьте, что бекенд доступен: `https://your-backend.com/api/health`
   - Должен вернуть JSON с `{"status": "ok"}`

