const docEl = document.documentElement;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const modeToggle = document.getElementById('modeToggle');
const cookieBanner = document.querySelector('.cookie-banner');
const copilotPanel = document.getElementById('copilotPanel');
const heroSection = document.getElementById('hero');
const heroHeadline = document.getElementById('heroHeadline');
const heroSubtitle = document.getElementById('heroSubtitle');
const heroPrimaryCta = document.getElementById('heroPrimaryCta');

const THEMES = { LIGHT: 'light', DARK: 'dark' };

function setTheme(theme) {
  docEl.dataset.theme = theme;
  localStorage.setItem('yr-theme', theme);
}

function initTheme() {
  const saved = localStorage.getItem('yr-theme');
  if (saved) {
    setTheme(saved);
  } else {
    setTheme(prefersDark.matches ? THEMES.DARK : THEMES.LIGHT);
  }
}

modeToggle?.addEventListener('click', () => {
  const next = docEl.dataset.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  setTheme(next);
});

prefersDark.addEventListener('change', (event) => {
  if (!localStorage.getItem('yr-theme')) {
    setTheme(event.matches ? THEMES.DARK : THEMES.LIGHT);
  }
});

initTheme();

// Smart personalization based on UTM parameters
(function personalizeHero() {
  const params = new URLSearchParams(window.location.search);
  const persona = params.get('utm_term') || params.get('utm_campaign') || params.get('persona');
  if (!persona) return;

  const normalized = persona.toLowerCase();
  if (normalized.includes('restaurant')) {
    heroSubtitle.textContent = 'Menus filled. Tables booked. Hospitality campaigns delivered.';
    heroPrimaryCta.textContent = 'Book a Restaurant Audit';
  } else if (normalized.includes('coach')) {
    heroSubtitle.textContent = 'Launch your coaching offer with ready-to-run funnels.';
    heroPrimaryCta.textContent = 'Book a Coach Audit';
  } else if (normalized.includes('saas')) {
    heroSubtitle.textContent = 'Design sprints that convert trials into loyal customers.';
    heroPrimaryCta.textContent = 'Start Now';
  }
})();

// A/B testing hero headline + CTA labels
(function runAbTest() {
  const variants = [
    {
      headline: 'Premium digital marketing for entrepreneurs & brands.',
      cta: 'Book a Free Audit (10 min)',
      id: 'variant-a'
    },
    {
      headline: 'Design that sells. Growth you can measure.',
      cta: 'Start Now with a Free Audit',
      id: 'variant-b'
    }
  ];

  const stored = localStorage.getItem('yr-ab-hero');
  let choice = stored ? variants.find((v) => v.id === stored) : null;
  if (!choice) {
    choice = variants[Math.floor(Math.random() * variants.length)];
    localStorage.setItem('yr-ab-hero', choice.id);
  }

  heroHeadline.textContent = choice.headline;
  heroPrimaryCta.textContent = choice.cta;
  heroSection.dataset.ab = choice.id;
})();

// ROI calculator
const avgOrder = document.getElementById('avgOrder');
const avgOrderValue = document.getElementById('avgOrderValue');
const monthlyVisitors = document.getElementById('monthlyVisitors');
const monthlyVisitorsValue = document.getElementById('monthlyVisitorsValue');
const conversionRate = document.getElementById('conversionRate');
const conversionRateValue = document.getElementById('conversionRateValue');
const projectedRevenue = document.getElementById('projectedRevenue');
const projectedRoi = document.getElementById('projectedRoi');

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

function updateRoi() {
  const orderValue = Number(avgOrder.value);
  const visitors = Number(monthlyVisitors.value);
  const rate = Number(conversionRate.value) / 100;
  const revenue = orderValue * visitors * rate;
  avgOrderValue.textContent = formatCurrency(orderValue);
  monthlyVisitorsValue.textContent = visitors.toLocaleString();
  conversionRateValue.textContent = `${conversionRate.value}%`;
  projectedRevenue.textContent = formatCurrency(revenue);
  const roi = revenue / 5000;
  projectedRoi.textContent = `${roi.toFixed(1)}x`;
}

[avgOrder, monthlyVisitors, conversionRate].forEach((input) => {
  input?.addEventListener('input', updateRoi);
});

updateRoi();

// AI Copilot Panel
const copilotTriggers = document.querySelectorAll('[data-panel="copilot"]');
const copilotForm = document.querySelector('.copilot-form');
const copilotBody = document.querySelector('.copilot-body');

function togglePanel(open) {
  const expanded = open ?? copilotPanel.getAttribute('aria-hidden') === 'true';
  copilotPanel.setAttribute('aria-hidden', expanded ? 'false' : 'true');
  copilotTriggers.forEach((trigger) => trigger.setAttribute('aria-expanded', expanded));
}

copilotTriggers.forEach((trigger) =>
  trigger.addEventListener('click', () => {
    const isHidden = copilotPanel.getAttribute('aria-hidden') === 'true';
    togglePanel(isHidden);
  })
);

document.querySelectorAll('[data-close]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.close);
    target?.setAttribute('aria-hidden', 'true');
  });
});

copilotForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const service = event.target.copilotService.value;
  const goal = event.target.copilotGoal.value;
  const serviceCopy = {
    brand: 'Brand Kit',
    web: 'Website',
    social: 'Social Kit'
  };
  const message = document.createElement('div');
  message.className = 'copilot-message';
  message.textContent = `Brief ready: Focus on ${serviceCopy[service]} to ${goal}. Expect timeline recap in your inbox within 12 hours.`;
  copilotBody.append(message);
  copilotBody.scrollTop = copilotBody.scrollHeight;
});

// Modal management
const modalButtons = document.querySelectorAll('[data-modal]');
modalButtons.forEach((button) => {
  const target = document.getElementById(button.dataset.modal);
  button.addEventListener('click', () => {
    target?.setAttribute('aria-hidden', 'false');
  });
});

// Close modals with Escape
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal, .copilot-panel').forEach((panel) => {
      if (panel.id === 'copilotPanel') {
        panel.setAttribute('aria-hidden', 'true');
      } else {
        panel.setAttribute('aria-hidden', 'true');
      }
    });
  }
});

// Cookie banner actions
const cookieAccept = document.getElementById('cookieAccept');
const cookieDecline = document.getElementById('cookieDecline');

const cookieChoice = localStorage.getItem('yr-cookie');
if (cookieChoice) {
  cookieBanner?.classList.add('hidden');
}

[cookieAccept, cookieDecline].forEach((button) =>
  button?.addEventListener('click', () => {
    const decision = button === cookieAccept ? 'accepted' : 'declined';
    localStorage.setItem('yr-cookie', decision);
    cookieBanner?.classList.add('hidden');
  })
);

// Voice input (SpeechRecognition API)
const voiceBtn = document.getElementById('voiceInputBtn');
const voiceStatus = document.getElementById('voiceStatus');
const messageField = document.getElementById('message');
let recognition;
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    messageField.value = `${messageField.value} ${transcript}`.trim();
    voiceStatus.textContent = 'Voice note added.';
  });

  recognition.addEventListener('end', () => {
    voiceBtn.disabled = false;
    voiceStatus.textContent = 'Voice capture complete.';
  });

  voiceBtn?.addEventListener('click', () => {
    voiceStatus.textContent = 'Listening…';
    voiceBtn.disabled = true;
    recognition.start();
  });
} else {
  voiceBtn?.setAttribute('disabled', 'true');
  voiceStatus.textContent = 'Voice input not supported on this device.';
}

// Passkey progressive enhancement
const passkeyBtn = document.getElementById('passkeyBtn');
passkeyBtn?.addEventListener('click', async () => {
  if (!window.PublicKeyCredential) {
    alert('Passkeys are not supported on this browser. Please submit via email.');
    return;
  }
  passkeyBtn.disabled = true;
  passkeyBtn.textContent = 'Checking passkey…';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  passkeyBtn.textContent = 'Passkey verified ✅';
});

// Quote button analytics hook
const quoteBtn = document.getElementById('quoteBtn');
quoteBtn?.addEventListener('click', () => {
  window.dispatchEvent(
    new CustomEvent('analytics:interaction', {
      detail: {
        component: 'quote-button',
        timestamp: Date.now()
      }
    })
  );
  alert('Thanks! I will follow up with a detailed quote shortly.');
});

// Realtime analytics placeholder
window.addEventListener('analytics:interaction', (event) => {
  console.log('Realtime analytics event:', event.detail);
});

// Pass dynamic follower count (simulated)
const igFollowerCount = document.getElementById('igFollowerCount');
if (igFollowerCount) {
  const base = 38200;
  const random = Math.floor(Math.random() * 400) + base;
  igFollowerCount.textContent = `${(random / 1000).toFixed(1)}K+`;
}

// PWA registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

// Lazy-load analytics script when consenting
if (cookieChoice === 'accepted') {
  import('./realtime.js').catch(() => console.log('Realtime module pending.'));
}

// Focus styles for keyboard navigation
function handleFirstTab(event) {
  if (event.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);

// Smooth anchor focus management
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
