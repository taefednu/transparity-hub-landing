# Настройка Git LFS для видеофайлов

## Шаг 1: Установка Git LFS

```bash
# Ubuntu/Debian
sudo apt-get install git-lfs

# Или через curl (если apt-get недоступен)
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
sudo apt-get install git-lfs
```

## Шаг 2: Инициализация Git LFS в репозитории

```bash
cd /home/taef/projects/ai500_landing
git lfs install
```

## Шаг 3: Добавление видеофайлов

```bash
# Добавить видеофайлы в Git LFS
git add demo/Vortex\ AI500.mp4
git add frontend/public/demo-video.mp4
git add .gitattributes .gitignore

# Закоммитить
git commit -m "Add video files using Git LFS"

# Отправить в репозиторий
git push origin main
```

## Важно

- Git LFS требует дополнительной настройки на GitHub (может потребоваться активация в настройках репозитория)
- Бесплатный план GitHub предоставляет 1 GB хранилища LFS и 1 GB трафика в месяц
- Файлы будут храниться в LFS, а не в основном репозитории

