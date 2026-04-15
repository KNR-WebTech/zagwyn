/* ═══════════════════════════════════════════════════════
   Zagwyn Firewood — main.js

   Set FORM_ENDPOINT below to wire up the contact form
   to a backend. Recommended: https://formspree.io
   Leave empty to simulate success (useful for local testing).
   ═══════════════════════════════════════════════════════ */

const FORM_ENDPOINT = ''; // e.g. 'https://formspree.io/f/yourkey'

/* ─── Zip Code Data ──────────────────────────────────── */
const ZIP_DATA = [
  { zip: '01464', town: 'Shirley',      zone: 1 },
  { zip: '01432', town: 'Ayer',         zone: 1 },
  { zip: '01434', town: 'Devens',       zone: 1 },
  { zip: '01450', town: 'Groton',       zone: 1 },
  { zip: '01451', town: 'Harvard',      zone: 1 },
  { zip: '01462', town: 'Lunenburg',    zone: 1 },
  { zip: '01469', town: 'Townsend',     zone: 1 },
  { zip: '01463', town: 'Pepperell',    zone: 1 },
  { zip: '01453', town: 'Leominster',   zone: 2 },
  { zip: '01420', town: 'Fitchburg',    zone: 2 },
  { zip: '01886', town: 'Westford',     zone: 2 },
  { zip: '01460', town: 'Littleton',    zone: 2 },
  { zip: '01719', town: 'Boxborough',   zone: 2 },
  { zip: '01720', town: 'Acton',        zone: 2 },
  { zip: '01824', town: 'Chelmsford',   zone: 2 },
  { zip: '01523', town: 'Lancaster',    zone: 2 },
  { zip: '01510', town: 'Clinton',      zone: 2 },
  { zip: '01742', town: 'Concord',      zone: 3 },
  { zip: '01741', town: 'Carlisle',     zone: 3 },
  { zip: '01776', town: 'Sudbury',      zone: 3 },
  { zip: '01773', town: 'Lincoln',      zone: 3 },
  { zip: '01778', town: 'Wayland',      zone: 3 },
  { zip: '02493', town: 'Weston',       zone: 3 },
  { zip: '01752', town: 'Marlborough',  zone: 3 },
  { zip: '01772', town: 'Southborough', zone: 3 },
];

const ZONE_LABELS = {
  1: 'Zone 1 — Immediate Exurban Core',
  2: 'Zone 2 — Suburban Ring',
  3: 'Zone 3 — Eastern Commuter Belt',
};

/* ─── Mobile Menu ────────────────────────────────────── */
function initMobileMenu() {
  const toggle      = document.getElementById('menu-toggle');
  const menu        = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const burgerOpen  = toggle.querySelector('.burger-open');
  const burgerClose = toggle.querySelector('.burger-close');

  function closeMenu() {
    menu.classList.remove('menu-open');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    burgerOpen  && burgerOpen.classList.remove('hidden');
    burgerClose && burgerClose.classList.add('hidden');
  }

  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('menu-open');
    if (isOpen) {
      menu.classList.add('menu-open');
      menu.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      burgerOpen  && burgerOpen.classList.add('hidden');
      burgerClose && burgerClose.classList.remove('hidden');
    } else {
      closeMenu();
    }
  });

  // Close when a nav link is clicked
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  // Close on Escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

/* ─── Active Nav Highlighting ────────────────────────── */
function setActiveNav() {
  const raw  = window.location.pathname.split('/').pop() || '';
  const page = raw === '' ? 'index.html' : raw;

  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const href     = link.getAttribute('href') || '';
    const linkPage = href.split('/').pop() || 'index.html';
    if (linkPage === page) {
      link.setAttribute('aria-current', 'page');
      link.style.color = 'var(--amber)';
    }
  });
}

/* ─── Zip Checker ────────────────────────────────────── */
function initZipChecker() {
  const form   = document.getElementById('zip-form');
  const result = document.getElementById('zip-result');
  if (!form || !result) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[name="zip"]');
    const zip   = (input ? input.value : '').trim();
    const found = ZIP_DATA.find(z => z.zip === zip);

    if (found) {
      result.innerHTML =
        `<p><span style="color:var(--amber);font-weight:600">Yes —</span> ` +
        `we deliver to <strong>${found.town}</strong> (${ZONE_LABELS[found.zone]}).</p>`;
    } else {
      result.innerHTML =
        `<p><strong>${zip}</strong> isn't in our quick lookup. ` +
        `<a href="contact.html" style="text-decoration:underline">Contact us</a> ` +
        `and we'll confirm delivery to your area.</p>`;
    }
  });
}

/* ─── Newsletter Forms ───────────────────────────────── */
function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    const successMsg = form.querySelector('.newsletter-success');
    const inputRow   = form.querySelector('.newsletter-input-row');

    form.addEventListener('submit', e => {
      e.preventDefault();
      // TODO: wire to Mailchimp, Buttondown, Kit, etc.
      if (inputRow)   inputRow.style.display   = 'none';
      if (successMsg) successMsg.style.display = 'block';
    });
  });
}

/* ─── Order / Contact Form ───────────────────────────── */
function initOrderForm() {
  const form      = document.getElementById('order-form');
  const successEl = document.getElementById('form-success');
  const errorEl   = document.getElementById('form-error');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');

    // Honeypot — bots often fill every field
    const honey = form.querySelector('[name="company"]');
    if (honey && honey.value) { showSuccess(); return; }

    btn.disabled    = true;
    btn.textContent = 'Sending\u2026';
    if (errorEl) errorEl.style.display = 'none';

    if (!FORM_ENDPOINT) {
      // No endpoint set — simulate success for local testing
      showSuccess();
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      showSuccess();
    } catch (err) {
      btn.disabled    = false;
      btn.textContent = 'Send My Order Request';
      if (errorEl) {
        errorEl.textContent = err.message || 'Something went wrong. Please try again or call us directly.';
        errorEl.style.display = 'block';
      }
    }

    function showSuccess() {
      form.style.display = 'none';
      if (successEl) successEl.style.display = 'block';
    }
  });
}

/* ─── Init ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  setActiveNav();
  initZipChecker();
  initNewsletterForms();
  initOrderForm();
});
