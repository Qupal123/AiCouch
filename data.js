const RANKS = [
  { name: 'Бронза', emoji: '🥉', color: '#cd7f32' },
  { name: 'Серебро', emoji: '🥈', color: '#a0a0b0' },
  { name: 'Золото', emoji: '🥇', color: '#ffd700' },
  { name: 'Алмаз', emoji: '💠', color: '#00e5ff' },
  { name: 'Мифический', emoji: '🔮', color: '#ab47bc' },
  { name: 'Легендарный', emoji: '🏆', color: '#ff5252' },
  { name: 'Мастера', emoji: '👑', color: '#ff7043' },
  { name: 'Про', emoji: '🎖️', color: '#ffc107' },
];

const BUFFED_BRAWLERS = ['Shelly', 'Colt', 'Spike', 'Emz', 'Frank', 'Mortis'];

const MODE_MAPS = {
  'Награда': ['Dry Season', 'Hideout', 'Creme de la Creme', 'Shooting Star'],
  'Броулбол': ['Super Stadium', 'Pinball Dreams', 'Backyard Bowl', 'Triple Dribble'],
  'Захват Кристаллов': ['Hard Rock Mine', 'Crystal Arcade', 'Double Swoosh', 'Deathcap Trap'],
  'Ограбление': ['Safe Zone', 'Kaboom Canyon', 'Hot Potato', 'Scorched Stone', 'Bridge Too Far'],
  'Горячая Зона': ['Open Business', 'Dueling Beetles', 'Ring of Fire', 'Parallel Plays'],
  'Нокаут': ['Goldarm Gulf', 'Toxic Swamp', 'Dark Dunes', 'Stone Fort'],
};

const MODES = [
  { name: 'Награда', icon: '⭐', maps: MODE_MAPS['Награда'].length },
  { name: 'Броулбол', icon: '⚽', maps: MODE_MAPS['Броулбол'].length },
  { name: 'Захват Кристаллов', icon: '💎', maps: MODE_MAPS['Захват Кристаллов'].length },
  { name: 'Ограбление', icon: '💰', maps: MODE_MAPS['Ограбление'].length },
  { name: 'Горячая Зона', icon: '🎯', maps: MODE_MAPS['Горячая Зона'].length },
  { name: 'Нокаут', icon: '👊', maps: MODE_MAPS['Нокаут'].length },
];

const META = {
  'Награда': {
    bans: {
      low: ['Piper', 'Nani', 'Gus'],
      mid: ['Nani', 'Colt', 'Piper'],
      high: ['Colt', 'Nani', 'Belle'],
      top: ['Colt', 'Nani', 'Belle'],
    },
    picks: {
      low: [
        { name: 'Colt', role: 'Снайпер', counters: ['Brock', 'Bo', 'Belle'], counteredBy: ['Mortis', 'Mico', 'Piper'] },
        { name: 'Piper', role: 'Снайпер', counters: ['Brock', 'Nani', 'Tick'], counteredBy: ['Mortis', 'Mico', 'Mr. P'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Frank', 'Meg'], counteredBy: ['Nani', 'Piper', 'Mortis'] },
        { name: 'Nani', role: 'Снайпер', counters: ['Piper', 'Belle', 'Byron'], counteredBy: ['Tick', 'Mr. P', 'Mortis'] },
        { name: 'Brock', role: 'Снайпер', counters: ['Spike', 'Emz', 'Bo'], counteredBy: ['Piper', 'Nani', 'Colt'] },
        { name: 'Gus', role: 'Поддержка', counters: ['Brock', 'Tick', 'Bo'], counteredBy: ['Mortis', 'Crow', 'Nani'] },
      ],
      mid: [
        { name: 'Colt', role: 'Снайпер', counters: ['Belle', 'Gus', 'Bo'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Nani', role: 'Снайпер', counters: ['Piper', 'Belle', 'Gus'], counteredBy: ['Mortis', 'Mr. P', 'Tick'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Frank', 'Lola'], counteredBy: ['Nani', 'Piper', 'Mortis'] },
        { name: 'Piper', role: 'Снайпер', counters: ['Brock', 'Bo', 'Tick'], counteredBy: ['Mortis', 'Mr. P', 'Nani'] },
        { name: 'Spike', role: 'Контроль', counters: ['Brock', 'Janet', 'Bo'], counteredBy: ['Piper', 'Nani', 'Mr. P'] },
        { name: 'Byron', role: 'Поддержка', counters: ['Belle', 'Colt', 'Bo'], counteredBy: ['Piper', 'Nani', 'Mortis'] },
      ],
      high: [
        { name: 'Colt', role: 'Снайпер', counters: ['Belle', 'Gus', 'Byron'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Nani', role: 'Снайпер', counters: ['Piper', 'Belle', 'Byron'], counteredBy: ['Tick', 'Mortis', 'Mr. P'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Gus', 'Meg'], counteredBy: ['Nani', 'Piper', 'Mortis'] },
        { name: 'Spike', role: 'Контроль', counters: ['Bo', 'Janet', 'Brock'], counteredBy: ['Nani', 'Piper', 'Mr. P'] },
        { name: 'Piper', role: 'Снайпер', counters: ['Janet', 'Brock', 'Tick'], counteredBy: ['Mortis', 'Nani', 'Mr. P'] },
        { name: 'Gus', role: 'Поддержка', counters: ['Bo', 'Brock', 'Belle'], counteredBy: ['Mortis', 'Crow', 'Nani'] },
      ],
      top: [
        { name: 'Colt', role: 'Снайпер', counters: ['Belle', 'Byron', 'Gus'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Nani', role: 'Снайпер', counters: ['Piper', 'Belle', 'Byron'], counteredBy: ['Mortis', 'Tick', 'Mr. P'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Meg', 'Gus'], counteredBy: ['Nani', 'Piper', 'Mortis'] },
        { name: 'Spike', role: 'Контроль', counters: ['Bo', 'Brock', 'Janet'], counteredBy: ['Nani', 'Piper', 'Mr. P'] },
        { name: 'Piper', role: 'Снайпер', counters: ['Brock', 'Janet', 'Tick'], counteredBy: ['Mortis', 'Nani', 'Mr. P'] },
        { name: 'Byron', role: 'Поддержка', counters: ['Belle', 'Colt', 'Bo'], counteredBy: ['Nani', 'Mortis', 'Piper'] },
      ],
    },
    alsoTry: {
      low: ['Brock', 'Bo', 'Tick'],
      mid: ['Byron', 'Gus', 'Brock'],
      high: ['Gus', 'Byron', 'Janet'],
      top: ['Byron', 'Gus', 'Tick'],
    },
  },
  'Броулбол': {
    bans: { low: ['Frank', 'Buster', 'Cordelius'], mid: ['Frank', 'Buster', 'Mortis'], high: ['Frank', 'Buster', 'Charlie'], top: ['Frank', 'Buster', 'Cordelius'] },
    picks: {
      low: [
        { name: 'Frank', role: 'Танк', counters: ['Buster', 'Shelly', 'Sandy'], counteredBy: ['Colette', 'Spike', 'Otis'] },
        { name: 'Shelly', role: 'Антитанк', counters: ['Frank', 'Buster', 'Bull'], counteredBy: ['Spike', 'Belle', 'Colt'] },
        { name: 'Buster', role: 'Танк', counters: ['Mortis', 'Fang', 'Sandy'], counteredBy: ['Colette', 'Shelly', 'Spike'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Gene', 'Emz', 'Tick'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
        { name: 'Cordelius', role: 'Контроль', counters: ['Frank', 'Buster', 'Sandy'], counteredBy: ['Shelly', 'Spike', 'Emz'] },
        { name: 'Spike', role: 'Контроль', counters: ['Frank', 'Buster', 'Bull'], counteredBy: ['Gene', 'Byron', 'Eve'] },
      ],
      mid: [
        { name: 'Frank', role: 'Танк', counters: ['Buster', 'Sandy', 'Rosa'], counteredBy: ['Colette', 'Spike', 'Shelly'] },
        { name: 'Shelly', role: 'Антитанк', counters: ['Frank', 'Buster', 'Bull'], counteredBy: ['Colt', 'Spike', 'Belle'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Emz', 'Gene', 'Poco'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
        { name: 'Buster', role: 'Танк', counters: ['Fang', 'Mortis', 'Sandy'], counteredBy: ['Colette', 'Shelly', 'Spike'] },
        { name: 'Cordelius', role: 'Контроль', counters: ['Frank', 'Buster', 'Poco'], counteredBy: ['Shelly', 'Spike', 'Sandy'] },
        { name: 'Emz', role: 'Контроль', counters: ['Frank', 'Bull', 'Bibi'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
      ],
      high: [
        { name: 'Frank', role: 'Танк', counters: ['Buster', 'Rosa', 'Poco'], counteredBy: ['Colette', 'Spike', 'Shelly'] },
        { name: 'Shelly', role: 'Антитанк', counters: ['Frank', 'Buster', 'Bull'], counteredBy: ['Colt', 'Spike', 'Belle'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Gene', 'Emz', 'Byron'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
        { name: 'Cordelius', role: 'Контроль', counters: ['Frank', 'Buster', 'R-T'], counteredBy: ['Shelly', 'Spike', 'Sandy'] },
        { name: 'Buster', role: 'Танк', counters: ['Fang', 'Mortis', 'Rosa'], counteredBy: ['Colette', 'Shelly', 'Spike'] },
        { name: 'Emz', role: 'Контроль', counters: ['Frank', 'Bull', 'Rosa'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
      ],
      top: [
        { name: 'Frank', role: 'Танк', counters: ['Buster', 'Rosa', 'Sandy'], counteredBy: ['Colette', 'Spike', 'Shelly'] },
        { name: 'Shelly', role: 'Антитанк', counters: ['Frank', 'Buster', 'Bull'], counteredBy: ['Colt', 'Spike', 'Belle'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Gene', 'Emz', 'R-T'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
        { name: 'Cordelius', role: 'Контроль', counters: ['Frank', 'Buster', 'Poco'], counteredBy: ['Shelly', 'Spike', 'Sandy'] },
        { name: 'Buster', role: 'Танк', counters: ['Fang', 'Mortis', 'Sandy'], counteredBy: ['Colette', 'Shelly', 'Spike'] },
        { name: 'Emz', role: 'Контроль', counters: ['Frank', 'Bull', 'Rosa'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
      ],
    },
    alsoTry: {
      low: ['Colette', 'Sandy', 'Fang'],
      mid: ['Colette', 'Gene', 'Sandy'],
      high: ['Colette', 'Gene', 'Otis'],
      top: ['Colette', 'Gene', 'Squeak'],
    },
  },
  'Захват Кристаллов': {
    bans: { low: ['Spike', 'Gene', 'Sandy'], mid: ['Spike', 'Gene', 'Emz'], high: ['Spike', 'Gene', 'Sandy'], top: ['Spike', 'Gene', 'R-T'] },
    picks: {
      low: [
        { name: 'Spike', role: 'Контроль', counters: ['Sandy', 'Rosa', 'Pam'], counteredBy: ['Piper', 'Nani', 'Mr. P'] },
        { name: 'Emz', role: 'Контроль', counters: ['Rosa', 'Jacky', 'Frank'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
        { name: 'Gene', role: 'Поддержка', counters: ['Tick', 'Poco', 'Belle'], counteredBy: ['Mortis', 'Buster', 'Tara'] },
        { name: 'Sandy', role: 'Контроль', counters: ['Byron', 'Gus', 'Belle'], counteredBy: ['Spike', 'Gene', 'Otis'] },
        { name: 'R-T', role: 'Антитанк', counters: ['Frank', 'Buster', 'Bull'], counteredBy: ['Belle', 'Nani', 'Colette'] },
        { name: 'Rosa', role: 'Танк', counters: ['Byron', 'Gus', 'Belle'], counteredBy: ['Spike', 'Emz', 'Colette'] },
      ],
      mid: [
        { name: 'Spike', role: 'Контроль', counters: ['Sandy', 'Rosa', 'Pam'], counteredBy: ['Piper', 'Nani', 'Mr. P'] },
        { name: 'Emz', role: 'Контроль', counters: ['Frank', 'Rosa', 'Jacky'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
        { name: 'Gene', role: 'Поддержка', counters: ['Tick', 'Poco', 'Byron'], counteredBy: ['Mortis', 'Buster', 'Tara'] },
        { name: 'Sandy', role: 'Контроль', counters: ['Belle', 'Byron', 'Gus'], counteredBy: ['Spike', 'Gene', 'Otis'] },
        { name: 'R-T', role: 'Антитанк', counters: ['Buster', 'Frank', 'Bull'], counteredBy: ['Belle', 'Nani', 'Colette'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Gene', 'Emz', 'Tick'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
      ],
      high: [
        { name: 'Spike', role: 'Контроль', counters: ['Sandy', 'Rosa', 'Pam'], counteredBy: ['Nani', 'Piper', 'Mr. P'] },
        { name: 'Emz', role: 'Контроль', counters: ['Frank', 'Rosa', 'Jacky'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
        { name: 'Gene', role: 'Поддержка', counters: ['Tick', 'Byron', 'Gus'], counteredBy: ['Mortis', 'Tara', 'Buster'] },
        { name: 'Sandy', role: 'Контроль', counters: ['Belle', 'Byron', 'Gus'], counteredBy: ['Spike', 'Gene', 'Otis'] },
        { name: 'R-T', role: 'Антитанк', counters: ['Buster', 'Frank', 'Bull'], counteredBy: ['Belle', 'Nani', 'Colette'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Gene', 'Emz', 'Tick'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
      ],
      top: [
        { name: 'Spike', role: 'Контроль', counters: ['Sandy', 'Rosa', 'Pam'], counteredBy: ['Nani', 'Piper', 'Mr. P'] },
        { name: 'Emz', role: 'Контроль', counters: ['Rosa', 'Frank', 'Buster'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
        { name: 'Gene', role: 'Поддержка', counters: ['Tick', 'Byron', 'Gus'], counteredBy: ['Mortis', 'Tara', 'Buster'] },
        { name: 'Sandy', role: 'Контроль', counters: ['Belle', 'Byron', 'Gus'], counteredBy: ['Spike', 'Gene', 'Otis'] },
        { name: 'R-T', role: 'Антитанк', counters: ['Frank', 'Buster', 'Bull'], counteredBy: ['Nani', 'Belle', 'Colette'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Gene', 'Emz', 'Tick'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
      ],
    },
    alsoTry: { low: ['R-T', 'Rosa', 'Pam'], mid: ['R-T', 'Mortis', 'Pam'], high: ['R-T', 'Mortis', 'Byron'], top: ['R-T', 'Mortis', 'Byron'] },
  },
  'Ограбление': {
    bans: { low: ['Frank', 'Chuck', 'Colette'], mid: ['Frank', 'Chuck', 'Colt'], high: ['Frank', 'Chuck', 'Colette'], top: ['Frank', 'Chuck', 'Colette'] },
    picks: {
      low: [
        { name: 'Frank', role: 'Танк', counters: ['Colt', 'Belle', 'Brock'], counteredBy: ['Colette', 'Spike', 'Shelly'] },
        { name: 'Colette', role: 'Антитанк', counters: ['Frank', 'Bull', 'Buster'], counteredBy: ['Mortis', 'Edgar', 'Sandy'] },
        { name: 'Chuck', role: 'Сплит-пуш', counters: ['Colt', 'Belle', 'Nani'], counteredBy: ['Cordelius', 'Crow', 'Otis'] },
        { name: 'Colt', role: 'ДПС', counters: ['Belle', 'Bo', 'Gus'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Spike', role: 'Контроль', counters: ['Frank', 'Bull', 'Rosa'], counteredBy: ['Piper', 'Nani', 'Mr. P'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Frank', 'Meg'], counteredBy: ['Nani', 'Mortis', 'Piper'] },
      ],
      mid: [
        { name: 'Frank', role: 'Танк', counters: ['Colt', 'Brock', 'Belle'], counteredBy: ['Colette', 'Spike', 'Shelly'] },
        { name: 'Colette', role: 'Антитанк', counters: ['Frank', 'Bull', 'Buster'], counteredBy: ['Mortis', 'Sandy', 'Cordelius'] },
        { name: 'Chuck', role: 'Сплит-пуш', counters: ['Colt', 'Belle', 'Byron'], counteredBy: ['Cordelius', 'Crow', 'Otis'] },
        { name: 'Colt', role: 'ДПС', counters: ['Belle', 'Bo', 'Gus'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Spike', role: 'Контроль', counters: ['Frank', 'Bull', 'Rosa'], counteredBy: ['Piper', 'Nani', 'Mr. P'] },
        { name: 'Brock', role: 'ДПС', counters: ['Spike', 'Frank', 'Rosa'], counteredBy: ['Nani', 'Colt', 'Piper'] },
      ],
      high: [
        { name: 'Frank', role: 'Танк', counters: ['Colt', 'Belle', 'Brock'], counteredBy: ['Colette', 'Spike', 'Shelly'] },
        { name: 'Chuck', role: 'Сплит-пуш', counters: ['Colt', 'Belle', 'Byron'], counteredBy: ['Cordelius', 'Otis', 'Crow'] },
        { name: 'Colette', role: 'Антитанк', counters: ['Frank', 'Bull', 'Buster'], counteredBy: ['Mortis', 'Sandy', 'Cordelius'] },
        { name: 'Colt', role: 'ДПС', counters: ['Bo', 'Belle', 'Gus'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Spike', role: 'Контроль', counters: ['Frank', 'Bull', 'Rosa'], counteredBy: ['Piper', 'Nani', 'Mr. P'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Frank', 'Meg'], counteredBy: ['Nani', 'Mortis', 'Piper'] },
      ],
      top: [
        { name: 'Frank', role: 'Танк', counters: ['Colt', 'Belle', 'Brock'], counteredBy: ['Colette', 'Spike', 'Shelly'] },
        { name: 'Chuck', role: 'Сплит-пуш', counters: ['Colt', 'Belle', 'Byron'], counteredBy: ['Cordelius', 'Otis', 'Crow'] },
        { name: 'Colette', role: 'Антитанк', counters: ['Frank', 'Bull', 'Buster'], counteredBy: ['Mortis', 'Sandy', 'Cordelius'] },
        { name: 'Colt', role: 'ДПС', counters: ['Belle', 'Bo', 'Gus'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Spike', role: 'Контроль', counters: ['Frank', 'Bull', 'Rosa'], counteredBy: ['Piper', 'Nani', 'Mr. P'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Frank', 'Meg'], counteredBy: ['Nani', 'Mortis', 'Piper'] },
      ],
    },
    alsoTry: { low: ['Brock', 'Bull', 'Jessie'], mid: ['Brock', 'Jessie', 'Cordelius'], high: ['Brock', 'Cordelius', 'Otis'], top: ['Brock', 'Cordelius', 'Otis'] },
  },
  'Горячая Зона': {
    bans: { low: ['Spike', 'Emz', 'Sandy'], mid: ['Spike', 'Emz', 'R-T'], high: ['Spike', 'Emz', 'Sandy'], top: ['Spike', 'Emz', 'R-T'] },
    picks: {
      low: [
        { name: 'Spike', role: 'Контроль', counters: ['Frank', 'Rosa', 'Sandy'], counteredBy: ['Nani', 'Piper', 'Mr. P'] },
        { name: 'Emz', role: 'Контроль', counters: ['Frank', 'Rosa', 'Jacky'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
        { name: 'Sandy', role: 'Контроль', counters: ['Byron', 'Belle', 'Gus'], counteredBy: ['Spike', 'Gene', 'Otis'] },
        { name: 'R-T', role: 'Антитанк', counters: ['Buster', 'Frank', 'Bull'], counteredBy: ['Belle', 'Nani', 'Colette'] },
        { name: 'Lou', role: 'Контроль', counters: ['Frank', 'Bull', 'Buster'], counteredBy: ['Colt', 'Belle', 'Byron'] },
        { name: 'Frank', role: 'Танк', counters: ['Sandy', 'Buster', 'Rosa'], counteredBy: ['Spike', 'Emz', 'Colette'] },
      ],
      mid: [
        { name: 'Spike', role: 'Контроль', counters: ['Frank', 'Rosa', 'Sandy'], counteredBy: ['Nani', 'Piper', 'Mr. P'] },
        { name: 'Emz', role: 'Контроль', counters: ['Frank', 'Rosa', 'Jacky'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
        { name: 'Sandy', role: 'Контроль', counters: ['Byron', 'Gus', 'Belle'], counteredBy: ['Spike', 'Gene', 'Otis'] },
        { name: 'R-T', role: 'Антитанк', counters: ['Buster', 'Frank', 'Bull'], counteredBy: ['Belle', 'Nani', 'Colette'] },
        { name: 'Lou', role: 'Контроль', counters: ['Frank', 'Buster', 'Bull'], counteredBy: ['Colt', 'Belle', 'Byron'] },
        { name: 'Frank', role: 'Танк', counters: ['Sandy', 'Buster', 'Rosa'], counteredBy: ['Spike', 'Emz', 'Colette'] },
      ],
      high: [
        { name: 'Spike', role: 'Контроль', counters: ['Frank', 'Rosa', 'Sandy'], counteredBy: ['Nani', 'Piper', 'Mr. P'] },
        { name: 'Emz', role: 'Контроль', counters: ['Frank', 'Rosa', 'Jacky'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
        { name: 'Sandy', role: 'Контроль', counters: ['Byron', 'Gus', 'Belle'], counteredBy: ['Spike', 'Gene', 'Otis'] },
        { name: 'R-T', role: 'Антитанк', counters: ['Buster', 'Frank', 'Bull'], counteredBy: ['Belle', 'Nani', 'Colette'] },
        { name: 'Lou', role: 'Контроль', counters: ['Frank', 'Buster', 'Bull'], counteredBy: ['Colt', 'Belle', 'Byron'] },
        { name: 'Frank', role: 'Танк', counters: ['Sandy', 'Buster', 'Rosa'], counteredBy: ['Spike', 'Emz', 'Colette'] },
      ],
      top: [
        { name: 'Spike', role: 'Контроль', counters: ['Frank', 'Rosa', 'Sandy'], counteredBy: ['Nani', 'Piper', 'Mr. P'] },
        { name: 'Emz', role: 'Контроль', counters: ['Frank', 'Rosa', 'Jacky'], counteredBy: ['Mortis', 'Gene', 'Squeak'] },
        { name: 'R-T', role: 'Антитанк', counters: ['Buster', 'Frank', 'Bull'], counteredBy: ['Belle', 'Nani', 'Colette'] },
        { name: 'Sandy', role: 'Контроль', counters: ['Byron', 'Gus', 'Belle'], counteredBy: ['Spike', 'Gene', 'Otis'] },
        { name: 'Lou', role: 'Контроль', counters: ['Frank', 'Buster', 'Bull'], counteredBy: ['Colt', 'Belle', 'Byron'] },
        { name: 'Frank', role: 'Танк', counters: ['Sandy', 'Buster', 'Rosa'], counteredBy: ['Spike', 'Emz', 'Colette'] },
      ],
    },
    alsoTry: { low: ['Lou', 'R-T', 'Rosa'], mid: ['Lou', 'R-T', 'Gene'], high: ['Lou', 'R-T', 'Gene'], top: ['Lou', 'R-T', 'Gene'] },
  },
  'Нокаут': {
    bans: { low: ['Colt', 'Nani', 'Piper'], mid: ['Colt', 'Nani', 'Mortis'], high: ['Colt', 'Nani', 'Belle'], top: ['Colt', 'Nani', 'Belle'] },
    picks: {
      low: [
        { name: 'Colt', role: 'Снайпер', counters: ['Belle', 'Bo', 'Byron'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Emz', 'Gene', 'Tick'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
        { name: 'Nani', role: 'Снайпер', counters: ['Piper', 'Belle', 'Byron'], counteredBy: ['Mortis', 'Tick', 'Mr. P'] },
        { name: 'Piper', role: 'Снайпер', counters: ['Bo', 'Brock', 'Tick'], counteredBy: ['Mortis', 'Nani', 'Mr. P'] },
        { name: 'Shelly', role: 'Антитанк', counters: ['Mortis', 'Frank', 'Buster'], counteredBy: ['Colt', 'Piper', 'Nani'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Frank', 'Meg'], counteredBy: ['Nani', 'Mortis', 'Piper'] },
      ],
      mid: [
        { name: 'Colt', role: 'Снайпер', counters: ['Belle', 'Bo', 'Byron'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Nani', role: 'Снайпер', counters: ['Piper', 'Belle', 'Byron'], counteredBy: ['Mortis', 'Tick', 'Mr. P'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Emz', 'Gene', 'Tick'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
        { name: 'Piper', role: 'Снайпер', counters: ['Bo', 'Brock', 'Tick'], counteredBy: ['Mortis', 'Nani', 'Mr. P'] },
        { name: 'Shelly', role: 'Антитанк', counters: ['Mortis', 'Frank', 'Buster'], counteredBy: ['Colt', 'Piper', 'Nani'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Frank', 'Meg'], counteredBy: ['Nani', 'Mortis', 'Piper'] },
      ],
      high: [
        { name: 'Colt', role: 'Снайпер', counters: ['Belle', 'Bo', 'Byron'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Nani', role: 'Снайпер', counters: ['Piper', 'Belle', 'Byron'], counteredBy: ['Mortis', 'Tick', 'Mr. P'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Emz', 'Gene', 'Tick'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
        { name: 'Shelly', role: 'Антитанк', counters: ['Mortis', 'Frank', 'Buster'], counteredBy: ['Colt', 'Piper', 'Nani'] },
        { name: 'Piper', role: 'Снайпер', counters: ['Bo', 'Brock', 'Tick'], counteredBy: ['Mortis', 'Nani', 'Mr. P'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Frank', 'Meg'], counteredBy: ['Nani', 'Mortis', 'Piper'] },
      ],
      top: [
        { name: 'Colt', role: 'Снайпер', counters: ['Belle', 'Bo', 'Byron'], counteredBy: ['Mortis', 'Nani', 'Piper'] },
        { name: 'Nani', role: 'Снайпер', counters: ['Piper', 'Belle', 'Byron'], counteredBy: ['Mortis', 'Tick', 'Mr. P'] },
        { name: 'Mortis', role: 'Ассасин', counters: ['Emz', 'Gene', 'Tick'], counteredBy: ['Shelly', 'Spike', 'Otis'] },
        { name: 'Shelly', role: 'Антитанк', counters: ['Mortis', 'Frank', 'Buster'], counteredBy: ['Colt', 'Piper', 'Nani'] },
        { name: 'Piper', role: 'Снайпер', counters: ['Bo', 'Brock', 'Tick'], counteredBy: ['Mortis', 'Nani', 'Mr. P'] },
        { name: 'Belle', role: 'Контроль', counters: ['8-Bit', 'Frank', 'Meg'], counteredBy: ['Nani', 'Mortis', 'Piper'] },
      ],
    },
    alsoTry: { low: ['Bo', 'Brock', 'Tick'], mid: ['Bo', 'Tick', 'Byron'], high: ['Bo', 'Tick', 'Byron'], top: ['Bo', 'Tick', 'Byron'] },
  },
};

function rankTier(rankName) {
  if (['Бронза', 'Серебро'].includes(rankName)) return 'low';
  if (['Золото', 'Алмаз'].includes(rankName)) return 'mid';
  if (['Мифический', 'Легендарный'].includes(rankName)) return 'high';
  return 'top';
}
