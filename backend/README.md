# Transparity Hub Backend

Минимальный Express.js бекенд для Transparity Hub.

## Установка

```bash
npm install
```

## Запуск

### Разработка
```bash
npm run dev
```

### Production
```bash
npm start
```

## Environment Variables

Создайте файл `.env` на основе `.env.example`:

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
NODE_ENV=production
```

## API Endpoints

- `GET /api/health` - Проверка работоспособности
- `GET /api/info` - Информация о проекте
- `POST /api/contact` - Отправка контактной формы

### Пример запроса к `/api/contact`:

```json
{
  "name": "Иван Иванов",
  "email": "ivan@example.com",
  "message": "Хочу обсудить пилот"
}
```

## Деплой

См. основной [README.md](../README.md) и [DEPLOY.md](../DEPLOY.md) для инструкций по деплою.

