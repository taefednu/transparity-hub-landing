# Решение проблемы с видео на Vercel

## Проблема
Vercel не поддерживает Git LFS автоматически, поэтому видеофайлы из LFS не загружаются при деплое.

## Решения

### Вариант 1: Использовать внешний хостинг (РЕКОМЕНДУЕТСЯ)

1. Загрузите видео на YouTube, Vimeo или Cloudinary
2. Обновите `frontend/src/pages/DemoPage.tsx`:

```tsx
<video controls>
  <source src="https://your-cdn.com/demo-video.mp4" type="video/mp4" />
  Ваш браузер не поддерживает видео.
</video>
```

### Вариант 2: Настроить Vercel для Git LFS

В настройках проекта Vercel:
1. Перейдите в Settings → Build & Development Settings
2. Добавьте в Build Command:
   ```
   git lfs pull && pnpm install && pnpm run build
   ```
3. Убедитесь, что Git LFS установлен в build окружении (может потребоваться установка через Docker)

### Вариант 3: Использовать Vercel Blob Storage

1. Загрузите видео в Vercel Blob Storage
2. Используйте URL из Blob Storage в коде

### Вариант 4: Использовать GitHub Releases

1. Загрузите видео как Release Asset на GitHub
2. Используйте прямой URL к файлу в Release

## Текущая настройка

В `vercel.json` добавлена команда `git lfs pull`, но она может не работать, если Git LFS не установлен в build окружении Vercel.

