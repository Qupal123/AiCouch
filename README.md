# BrawlDraft

Бесплатное SPA веб-приложение для Ranked Draft в Brawl Stars (чистый HTML/CSS/JS, без бэкенда), готовое для GitHub Pages.

## Что внутри
- 6 экранов без перезагрузки: Главная → Ранг → Режим → Карта → Порядок пика → Рекомендации.
- Локальное сохранение ранга в `localStorage`.
- Мета-рекомендации по 6 режимам и 4 уровням ранга (low/mid/high/top).
- Учтена система баффи (декабрь 2025), с тегом `⚡ Баффи` у приоритетных бойцов.
- PWA: `manifest.json` + `service-worker.js` для офлайна.

## Структура
- `index.html`
- `style.css`
- `app.js`
- `data.js`
- `manifest.json`
- `service-worker.js`
- `images/brawlers_portrait/` (формат как на вашем скрине: `shelly_portrait.png`)
- `images/brawlers/` (резервный формат: `shelly.png`)
- `images/maps/` (основной формат: `goldarm_gulf.png`)
- `images/maps_official/` (резервный формат карт)
- `tools/download_assets.py` (автоскачивание на машине с открытым интернетом)
- `.github/workflows/deploy.yml`


## Как добавить картинки (под ваш формат)
1. Положите портреты бойцов в `images/brawlers_portrait/` с именами `*_portrait.png` (например, `colt_portrait.png`, `mr_p_portrait.png`, `r_t_portrait.png`).
2. Положите карты в `images/maps/` (или в `images/maps_official/`) с именами вида `goldarm_gulf.png`, `ring_of_fire.png`.
3. Приложение автоматически делает fallback: сначала ищет portrait/основную карту, потом запасной путь, потом эмодзи.

### Автоскачивание (опционально)
Если у вас на ПК есть доступ в интернет, можно скачать картинки скриптом:

```bash
python3 tools/download_assets.py
```

## Запуск локально
Откройте `index.html` в браузере или поднимите простой сервер:

```bash
python3 -m http.server 8080
```

## Деплой на GitHub Pages за 3 шага
1. **Создайте репозиторий** и загрузите все файлы проекта в ветку `main`.
2. **Запушьте изменения** — workflow `.github/workflows/deploy.yml` автоматически опубликует сайт через `peaceiris/actions-gh-pages`.
3. В GitHub откройте **Settings → Pages**, выберите source `gh-pages` (если не выставилось автоматически), сохраните и дождитесь ссылки на сайт.

Готово — приложение будет доступно по URL GitHub Pages.
