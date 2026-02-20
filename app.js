const app = document.getElementById('app');

const state = {
  rank: localStorage.getItem('brawldraft_rank') || 'Бронза',
  mode: null,
  map: null,
  firstPick: true,
};

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9а-яё]+/gi, '_').replace(/^_|_$/g, '');
}

function slugifyLatin(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function getBrawlerSources(name) {
  const slug = slugifyLatin(name);
  return {
    primary: `images/brawlers_portrait/${slug}_portrait.png`,
    secondary: `images/brawlers/${slug}.png`,
  };
}

function getMapSources(name) {
  const slug = slugify(name);
  return {
    primary: `images/maps/${slug}.png`,
    secondary: `images/maps_official/${slug}.png`,
  };
}

function withBuffTag(name) {
  return BUFFED_BRAWLERS.includes(name) ? `${name} <span class="tag buff">⚡ Баффи</span>` : name;
}

function fallbackImg(img, fallbackId) {
  if (img.dataset.altSrc && img.dataset.altSrc !== img.src && !img.dataset.altTried) {
    img.dataset.altTried = '1';
    img.src = img.dataset.altSrc;
    return;
  }

  const el = document.getElementById(fallbackId);
  if (el) el.style.display = 'grid';
  img.style.display = 'none';
}

window.fallbackImg = fallbackImg;

function navigate(screen) {
  document.querySelectorAll('.screen').forEach((node) => node.classList.remove('active'));
  document.getElementById(screen)?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function render() {
  const currentRankCard = `<div class="card"><h2 class="title">Текущий: ${state.rank}</h2><div class="subtitle">Сохранено в localStorage</div></div>`;

  const rankCards = RANKS.map(
    (rank) => `
      <button class="card rank-card ${state.rank === rank.name ? 'selected' : ''}" style="border-color:${rank.color}" onclick="selectRank('${rank.name}')">
        <div class="check">✅</div>
        <div style="font-size:28px">${rank.emoji}</div>
        <div>${rank.name}</div>
      </button>`,
  ).join('');

  const modeCards = MODES.map(
    (mode) => `<button class="card mode-card ${state.mode === mode.name ? 'selected' : ''}" onclick="selectMode('${mode.name}')">
      <div><strong>${mode.icon} ${mode.name}</strong><div class="subtitle">${mode.maps} карты</div></div><div>→</div></button>`,
  ).join('');

  const maps = state.mode ? MODE_MAPS[state.mode] : [];
  const mapCards = maps
    .map((mapName, idx) => {
      const fallbackId = `mapfb_${idx}`;
      return `<button class="card map-card" onclick="selectMap('${mapName}')">
        <div class="map-content">
          <img class="map-preview" src="${getMapSources(mapName).primary}" data-alt-src="${getMapSources(mapName).secondary}" alt="${mapName}" onerror="fallbackImg(this,'${fallbackId}')" />
          <span class="fallback" id="${fallbackId}">🗺️</span>
          <div><strong>${mapName}</strong></div>
        </div><div>→</div></button>`;
    })
    .join('');

  app.innerHTML = `
  <section id="home" class="screen active">
    <div class="home-wrap">
      <div class="logo-bolt">⚡</div>
      <h1 class="brand"><span>BRAWL</span><span class="draft">DRAFT</span></h1>
      <div class="subtitle">Ranked Draft Helper</div>
      <button class="btn" onclick="navigate('rank')">Начать Ranked Draft</button>
      <div class="meta-badge"><span class="dot"></span>Мета актуальна · Баффи учтены</div>
    </div>
  </section>

  <section id="rank" class="screen">
    <h2 class="title">Выбор ранга</h2>
    <div style="margin:10px 0">${currentRankCard}</div>
    <div class="grid-ranks">${rankCards}</div>
  </section>

  <section id="mode" class="screen">
    <h2 class="title">Выбор режима</h2>
    <div class="mode-list" style="margin-top:10px">${modeCards}</div>
  </section>

  <section id="map" class="screen">
    <h2 class="title">Выбор карты</h2>
    <div class="subtitle">Режим: ${state.mode || '—'}</div>
    <div class="map-list" style="margin-top:10px">${mapCards}</div>
  </section>

  <section id="order" class="screen">
    <h2 class="title">Порядок пика</h2>
    <div class="card" style="margin-top:10px">
      <strong>Карта:</strong> ${state.map || '—'}<br>
      <strong>Режим:</strong> ${state.mode || '—'}<br>
      <strong>Ранг:</strong> ${state.rank}
    </div>
    <div class="toggle" style="margin-top:10px">
      <button class="btn ${state.firstPick ? 'active' : 'secondary'}" onclick="setPickOrder(true)">👤 Мы выбираем первыми</button>
      <button class="btn ${!state.firstPick ? 'active' : 'secondary'}" onclick="setPickOrder(false)">👥 Противник выбирает первым</button>
    </div>
    <button class="btn" style="margin-top:10px;width:100%" onclick="showRecommendations()">Получить рекомендации →</button>
  </section>

  <section id="result" class="screen"></section>
  `;
}

function selectRank(rankName) {
  state.rank = rankName;
  localStorage.setItem('brawldraft_rank', rankName);
  render();
  navigate('mode');
}

function selectMode(modeName) {
  state.mode = modeName;
  state.map = null;
  render();
  navigate('map');
}

function selectMap(mapName) {
  state.map = mapName;
  render();
  navigate('order');
}

function setPickOrder(firstPick) {
  state.firstPick = firstPick;
  render();
  navigate('order');
}

function showRecommendations() {
  if (!state.mode || !state.map) return;
  const tier = rankTier(state.rank);
  const modeData = META[state.mode];
  const bans = modeData.bans[tier];
  const picks = modeData.picks[tier];
  const alsoTry = modeData.alsoTry[tier];

  const orderedPicks = state.firstPick ? picks : [picks[1], picks[0], ...picks.slice(2)];

  const bansHtml = bans
    .map((name, i) => {
      const fb = `ban_${i}`;
      return `<div class="card ban-card"><strong style="color:#ff8484">#${i + 1}</strong>
        <img class="brawler-img small" src="${getBrawlerSources(name).primary}" data-alt-src="${getBrawlerSources(name).secondary}" alt="${name}" onerror="fallbackImg(this,'${fb}')" />
        <span class="fallback" id="${fb}" style="width:52px;height:52px">🎯</span>
        <div><strong>${withBuffTag(name)}</strong><div>Рекомендуемый Бан</div></div></div>`;
    })
    .join('');

  const picksHtml = orderedPicks
    .map((pick, i) => {
      const fb = `pick_${i}`;
      return `<article class="card pick-card">
      <div class="pick-head">
        <strong>#${i + 1}</strong>
        <img class="brawler-img" src="${getBrawlerSources(pick.name).primary}" data-alt-src="${getBrawlerSources(pick.name).secondary}" alt="${pick.name}" onerror="fallbackImg(this,'${fb}')" />
        <span class="fallback" id="${fb}" style="width:60px;height:60px">🥊</span>
        <div><strong>${withBuffTag(pick.name)}</strong><div><span class="tag role">${pick.role}</span></div></div>
      </div>
      <div class="matchups">
        <div class="match good"><strong>✓ Контрит</strong><br>${pick.counters.join(', ')}</div>
        <div class="match bad"><strong>✗ Слаб против</strong><br>${pick.counteredBy.join(', ')}</div>
      </div>
      </article>`;
    })
    .join('');

  const altsHtml = alsoTry
    .map((name, i) => {
      const fb = `alt_${i}`;
      const source = picks.find((p) => p.name === name);
      const role = source?.role || 'Гибкий';
      return `<div class="card alt-card"><div style="display:flex;align-items:center;gap:10px">
      <img class="brawler-img small" src="${getBrawlerSources(name).primary}" data-alt-src="${getBrawlerSources(name).secondary}" alt="${name}" onerror="fallbackImg(this,'${fb}')" />
      <span class="fallback" id="${fb}" style="width:52px;height:52px">🧩</span>
      <div><strong>${withBuffTag(name)}</strong><div class="subtitle">${role}</div></div></div></div>`;
    })
    .join('');

  const mapFb = 'result_map_fb';
  document.getElementById('result').innerHTML = `
    <h2 class="title">Рекомендации</h2>
    <div class="card summary-block" style="margin-top:10px">
      <strong>${MODES.find((m) => m.name === state.mode).icon} ${state.mode}</strong>
      <img src="${getMapSources(state.map).primary}" data-alt-src="${getMapSources(state.map).secondary}" alt="${state.map}" onerror="fallbackImg(this,'${mapFb}')" />
      <span class="fallback" id="${mapFb}" style="width:100%;height:170px">🗺️</span>
      <div><strong>${state.map}</strong></div>
      <div class="subtitle">Ранг: ${state.rank} · Пик: ${state.firstPick ? 'Мы первые' : 'Противник первый'}</div>
    </div>

    <h3 class="section-title bans">🚫 Баны</h3>
    <div class="bans-list">${bansHtml}</div>

    <h3 class="section-title picks">⚡ Пики</h3>
    <div class="picks-note">Пики учитывают текущую мету и баффи</div>
    <div class="picks-list">${picksHtml}</div>

    <h3 class="section-title alts">💡 Альтернативы</h3>
    <div class="also-list">${altsHtml}</div>

    <button class="btn secondary" style="margin-top:14px;width:100%" onclick="navigate('home')">⟵ Начать заново</button>
  `;

  navigate('result');
}

window.navigate = navigate;
window.selectRank = selectRank;
window.selectMode = selectMode;
window.selectMap = selectMap;
window.setPickOrder = setPickOrder;
window.showRecommendations = showRecommendations;

render();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
}
