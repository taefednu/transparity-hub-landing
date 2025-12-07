# Решение проблемы 404 на Vercel для SPA

## Проблема
После деплоя на Vercel страница `/demo` возвращает 404 ошибку.

## Решения

### 1. Проверьте настройки в Vercel Dashboard

**Settings → General:**
- ✅ Root Directory: `frontend`
- ✅ Framework Preset: `Vite` или `Other`

**Settings → Build & Development Settings:**
- ✅ Build Command: `git lfs pull || true && pnpm install && pnpm run build`
- ✅ Output Directory: `build`
- ✅ Install Command: `pnpm install`

### 2. Убедитесь, что `frontend/vercel.json` существует

Файл должен содержать:
```json
{
  "outputDirectory": "build",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. Альтернативный вариант - использовать redirects

Если rewrites не работают, попробуйте использовать redirects:

```json
{
  "outputDirectory": "build",
  "redirects": [
    {
      "source": "/((?!assets|.*\\.).*)",
      "destination": "/index.html",
      "permanent": false
    }
  ]
}
```

### 4. Проверьте, что файлы собираются правильно

Убедитесь, что после сборки в папке `build` есть:
- `index.html`
- `assets/` (с CSS и JS файлами)

### 5. Если ничего не помогает

Попробуйте использовать HashRouter вместо BrowserRouter:

```tsx
import { HashRouter } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </HashRouter>
  );
}
```

Тогда URL будет: `https://your-site.vercel.app/#/demo`

## Текущая конфигурация

- ✅ `frontend/vercel.json` настроен с rewrites
- ✅ `outputDirectory: "build"` указан
- ⚠️ Проверьте настройки в Vercel Dashboard

