# Скрипт для быстрого деплоя на Vercel (PowerShell)

Write-Host "🚀 Transparity Hub - Деплой на Vercel" -ForegroundColor Green
Write-Host ""

# Проверка Git
Write-Host "📦 Проверка Git репозитория..." -ForegroundColor Yellow
if (Test-Path .git) {
    Write-Host "✅ Git репозиторий найден" -ForegroundColor Green
} else {
    Write-Host "❌ Git репозиторий не найден. Инициализация..." -ForegroundColor Red
    git init
    git add .
    git commit -m "Initial commit: Transparity Hub"
}

# Проверка билда
Write-Host ""
Write-Host "🔨 Проверка билда фронтенда..." -ForegroundColor Yellow
Set-Location frontend
if (Test-Path node_modules) {
    Write-Host "✅ node_modules найден" -ForegroundColor Green
} else {
    Write-Host "📥 Установка зависимостей..." -ForegroundColor Yellow
    npm install
}

Write-Host "🔨 Запуск билда..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Билд успешен!" -ForegroundColor Green
} else {
    Write-Host "❌ Ошибка билда!" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Set-Location ..

# Инструкции
Write-Host ""
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "✅ ВСЕ ГОТОВО К ДЕПЛОЮ!" -ForegroundColor Green
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Следующие шаги:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Создайте репозиторий на GitHub.com" -ForegroundColor White
Write-Host "2. Выполните:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/transparity-hub.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Зайдите на vercel.com и подключите репозиторий" -ForegroundColor White
Write-Host "4. В настройках укажите:" -ForegroundColor White
Write-Host "   - Root Directory: frontend" -ForegroundColor Gray
Write-Host "   - Output Directory: build" -ForegroundColor Gray
Write-Host ""
Write-Host "📖 Подробная инструкция в файле DEPLOY_NOW.md" -ForegroundColor Cyan
Write-Host ""

