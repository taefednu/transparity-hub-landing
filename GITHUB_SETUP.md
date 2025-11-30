# 🔗 Подключение к GitHub

## Быстрая инструкция

### 1. Создайте репозиторий на GitHub

1. Зайдите на [github.com](https://github.com) и войдите
2. Нажмите **"+"** в правом верхнем углу → **"New repository"**
3. Заполните:
   - **Repository name**: `transparity-hub` (или любое другое)
   - **Description**: `Transparity Hub - Credit Passport for MSME in Uzbekistan`
   - **Visibility**: Public (или Private - на ваше усмотрение)
   - ⚠️ **НЕ** ставьте галочки на "Add a README", ".gitignore" или "license" - у нас уже есть файлы
4. Нажмите **"Create repository"**

### 2. Подключите локальный репозиторий к GitHub

Выполните в терминале (замените `YOUR_USERNAME` на ваш GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/transparity-hub.git
git push -u origin main
```

**Если используете SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/transparity-hub.git
git push -u origin main
```

### 3. После успешного push

Переходите к деплою на Vercel (см. `DEPLOY_NOW.md`)

---

**Готово!** Теперь ваш код на GitHub и можно деплоить на Vercel.

