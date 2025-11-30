# 🚀 ДЕПЛОЙ СЕЙЧАС - Пошаговая инструкция

## ✅ Что уже готово:
- ✅ Git репозиторий инициализирован
- ✅ Все файлы закоммичены
- ✅ Билд проходит успешно
- ✅ Конфигурация Vercel готова

## 📋 ШАГ 1: Создайте GitHub репозиторий

1. Зайдите на [github.com](https://github.com) и войдите в аккаунт
2. Нажмите **"+"** → **"New repository"**
3. Название: `transparity-hub` (или любое другое)
4. **НЕ** добавляйте README, .gitignore или лицензию (у нас уже есть)
5. Нажмите **"Create repository"**

## 📋 ШАГ 2: Подключите к GitHub

Выполните в терминале (замените YOUR_USERNAME на ваш GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/transparity-hub.git
git branch -M main
git push -u origin main
```

**Или через SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/transparity-hub.git
git branch -M main
git push -u origin main
```

## 📋 ШАГ 3: Деплой на Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите **"Sign Up"** (можно через GitHub - будет проще)
3. После входа нажмите **"Add New..."** → **"Project"**
4. Выберите ваш репозиторий `transparity-hub`
5. **Настройки проекта:**
   - **Framework Preset**: `Vite` (или "Other")
   - **Root Directory**: `frontend` ⚠️ **ВАЖНО!**
   - **Build Command**: `npm run build` (или оставьте по умолчанию)
   - **Output Directory**: `build` ⚠️ **ВАЖНО!**
   - **Install Command**: `npm install` (или оставьте по умолчанию)
6. Нажмите **"Deploy"**
7. Ждите 1-2 минуты
8. **ГОТОВО!** Получите URL: `https://your-project.vercel.app`

## 🎯 Альтернатива: Деплой через Vercel CLI

Если хотите деплоить прямо из терминала:

```bash
npm install -g vercel
vercel login
vercel --cwd frontend
```

Следуйте инструкциям в терминале.

## ✅ Проверка после деплоя

1. Откройте URL вашего сайта
2. Проверьте, что все секции отображаются
3. Проверьте, что нет ошибок в консоли браузера

## 🔧 Если что-то пошло не так

### Ошибка билда на Vercel:
- Проверьте, что **Root Directory** = `frontend`
- Проверьте, что **Output Directory** = `build`
- Проверьте логи билда в Vercel Dashboard

### Сайт не открывается:
- Проверьте, что билд завершился успешно
- Проверьте логи в Vercel Dashboard → Deployments

---

**Время деплоя**: ~5-10 минут  
**Стоимость**: Бесплатно навсегда  
**Домен**: `your-project.vercel.app` (можно подключить свой домен позже)

