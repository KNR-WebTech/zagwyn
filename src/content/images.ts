/**
 * Centralized stock photo URLs — all from Unsplash (free for use).
 * Replace these with real Zagwyn operational photography when available.
 * Format: https://images.unsplash.com/photo-{ID}?w={W}&h={H}&q=80&auto=format&fit=crop
 */

const base = "https://images.unsplash.com";

export const images = {
  // ── Homepage ─────────────────────────────────────────────────────────────
  hero: `${base}/photo-1504307651254-35680f356dfd?w=1600&h=900&q=85&auto=format&fit=crop`,

  // ── Product photos ────────────────────────────────────────────────────────
  products: {
    kilnDried: `${base}/photo-1518057111178-44a106bad636?w=900&h=900&q=80&auto=format&fit=crop`,
    seasoned: `${base}/photo-1543269865-cbf427effbad?w=900&h=900&q=80&auto=format&fit=crop`,
    green: `${base}/photo-1595147389795-37094173bfd8?w=900&h=900&q=80&auto=format&fit=crop`,
  },

  // ── About page ────────────────────────────────────────────────────────────
  about: {
    portrait: `${base}/photo-1581578731548-c64695cc6952?w=800&h=1067&q=80&auto=format&fit=crop`,
  },

  // ── Equipment section ─────────────────────────────────────────────────────
  equipment: {
    skidSteer: `${base}/photo-1600880292203-757bb62b4baf?w=1200&h=675&q=80&auto=format&fit=crop`,
    processor: `${base}/photo-1504307651254-35680f356dfd?w=1200&h=675&q=80&auto=format&fit=crop`,
    kiln: `${base}/photo-1516912481808-3406841bd33c?w=1200&h=675&q=80&auto=format&fit=crop`,
    dumpTruck: `${base}/photo-1558618666-fcd25c85cd64?w=1200&h=675&q=80&auto=format&fit=crop`,
  },

  // ── Knowledge Base article thumbnails ────────────────────────────────────
  learn: {
    kilnVsSeasoned: `${base}/photo-1509515837298-2c67a3933321?w=800&h=450&q=80&auto=format&fit=crop`,
    storage: `${base}/photo-1518057111178-44a106bad636?w=800&h=450&q=80&auto=format&fit=crop`,
    measurements: `${base}/photo-1543269865-cbf427effbad?w=800&h=450&q=80&auto=format&fit=crop`,
  },
};
