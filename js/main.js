// ============================================
// わらしべ東京 — Straw Millionaire Tokyo
// ============================================

// Trade data
const TRADES = [
  { id: 0, icon: '🥤', label: 'Start', value: '¥5', desc: '1本のストローからスタート', date: '2026-06-22', status: 'current' },
  { id: 1, icon: '💻', label: 'Trade 1', value: '—', desc: '最初の取引', date: null, status: 'pending' },
  { id: 2, icon: '🎨', label: 'Trade 2', value: '—', desc: '', date: null, status: 'pending' },
  { id: 3, icon: '📱', label: 'Trade 3', value: '—', desc: '', date: null, status: 'pending' },
  { id: 4, icon: '🏗️', label: 'Trade 4', value: '—', desc: '', date: null, status: 'pending' },
  { id: 5, icon: '🏢', label: 'Trade 5', value: '—', desc: '', date: null, status: 'pending' },
  { id: 6, icon: '💎', label: 'Trade 6', value: '—', desc: '', date: null, status: 'pending' },
  { id: 7, icon: '🏆', label: 'Goal', value: '¥100M', desc: '目標達成', date: null, status: 'pending' },
];

function init() {
  renderTradeTracker();
  animateStats();
  console.log('🌾 わらしべ東京 — Let the journey begin.');
}

function renderTradeTracker() {
  const tracker = document.getElementById('tradeTracker');
  if (!tracker) return;

  tracker.innerHTML = TRADES.map((trade, i) => {
    const nextTrade = TRADES[i + 1];
    const isLast = i === TRADES.length - 1;
    return `
      <div class="trade-step ${trade.status}">
        ${trade.status === 'completed' ? `<span class="step-num">${i}</span>` : ''}
        <div class="step-icon">${trade.icon}</div>
        <div class="step-label">${trade.label}</div>
        <div class="step-value">${trade.value}</div>
      </div>
    `;
  }).join('');
}

function animateStats() {
  const tradeCount = document.getElementById('tradeCount');
  const currentValue = document.getElementById('currentValue');
  const dayCount = document.getElementById('dayCount');

  if (tradeCount) {
    tradeCount.textContent = '0';
  }
  if (currentValue) {
    currentValue.textContent = '¥5';
  }
  if (dayCount) {
    dayCount.textContent = '14';
  }
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.principle, .stat-card, .timeline-node').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
}

// Init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    init();
    initScrollAnimations();
  });
} else {
  init();
  initScrollAnimations();
}
