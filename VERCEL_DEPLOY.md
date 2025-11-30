# 🚀 Деплой на Vercel (бесплатно)

## Быстрый деплой фронтенда за 5 минут

### Шаг 1: GitHub репозиторий

```bash
git init
git add .
git commit -m "Initial commit"
# Создайте репозиторий на github.com
git remote add origin https://github.com/YOUR_USERNAME/transparity-hub.git
git push -u origin main
```

### Шаг 2: Деплой на Vercel

1. Зайдите на [vercel.com](https://vercel.com) → **Sign Up** (можно через GitHub)

2. Нажмите **"Add New..."** → **"Project"**

3. Импортируйте ваш GitHub репозиторий

4. **Настройки проекта:**
   - **Framework Preset**: `Vite` (или оставьте "Other")
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (или оставьте по умолчанию)
   - **Output Directory**: `build`
   - **Install Command**: `npm install` (или оставьте по умолчанию)

5. **Environment Variables** (если нужен бекенд):
   - `VITE_API_URL` = URL вашего бекенда (если деплоите бекенд отдельно)

6. Нажмите **"Deploy"**

7. Готово! Через 1-2 минуты получите URL: `https://your-project.vercel.app`

### Что получите:

✅ Бесплатный домен: `your-project.vercel.app`  
✅ HTTPS автоматически  
✅ Автоматические деплои при каждом push в main  
✅ CDN для быстрой загрузки  
✅ Неограниченное количество деплоев  

### Бекенд (опционально):

Если нужен бекенд, деплойте его на **Render** (тоже бесплатно):
- См. `QUICK_START.md` для инструкций по Render

---

**Время деплоя**: ~5 минут  
**Стоимость**: Бесплатно навсегда

