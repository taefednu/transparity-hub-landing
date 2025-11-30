# 🚀 Деплой на Vercel

## Быстрая инструкция

### 1. Подключите репозиторий

1. Зайдите на [vercel.com](https://vercel.com) и войдите через GitHub
2. Нажмите **"Add New..."** → **"Project"**
3. Выберите репозиторий `transparity-hub-landing`

### 2. Настройки проекта

**⚠️ ВАЖНО:** Укажите эти настройки:

- **Framework Preset**: `Vite` (или "Other")
- **Root Directory**: `frontend` ⚠️
- **Build Command**: `npm run build` (или оставьте по умолчанию)
- **Output Directory**: `build` ⚠️
- **Install Command**: `npm install` (или оставьте по умолчанию)

### 3. Деплой

Нажмите **"Deploy"** и ждите 1-2 минуты.

### 4. Готово! ✅

Получите URL: `https://your-project.vercel.app`

---

**Примечание:** `vercel.json` уже настроен, но в настройках проекта обязательно укажите **Root Directory = `frontend`**.

