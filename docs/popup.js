/*
 * Print & Craft Co. — Exit-intent / timed discount popup
 * Loaded as a standalone script at the end of <body> (like cart-badge.js),
 * so it lives OUTSIDE the GoHighLevel __NUXT__ hydration tree and is never
 * reverted on re-render.
 *
 * ── SETUP ──────────────────────────────────────────────────────────────
 * 1. In GoHighLevel, build a SHORT form: Email (required) + First Name
 *    (optional). Set its on-submit to reveal / email the discount code.
 * 2. Paste that form's embed URL below as GHL_FORM_URL and set GHL_FORM_ID
 *    to the form id (the trailing segment of the URL). Until then the popup
 *    stays disabled and nothing renders.
 * ───────────────────────────────────────────────────────────────────────
 */
(function () {
  "use strict";

  // ── CONFIG ────────────────────────────────────────────────────────────
  var GHL_FORM_ID  = "REPLACE_WITH_FORM_ID";
  var GHL_FORM_URL = "https://links.scalesmartsoftware.com/widget/form/" + GHL_FORM_ID;
  var FORM_HEIGHT  = 460;          // px; GHL's form_embed.js auto-adjusts after load
  var TIMED_DELAY  = 25000;        // show after 25s if exit-intent hasn't fired
  var ARM_EXIT_AFTER = 5000;       // don't arm exit-intent for the first 5s
  var SNOOZE_DAYS  = 7;            // don't re-show for this many days after shown/dismissed

  var HEADLINE = "Get 10% Off Your First Order";
  var SUBTEXT  = "Join our list for a one-time discount code, new drops, and deals — crafted in South Texas, shipped to all 50 states.";

  // Bail out until a real form is configured.
  if (GHL_FORM_ID === "REPLACE_WITH_FORM_ID") {
    console.warn("[pnc-popup] disabled: set GHL_FORM_ID in /popup.js to enable.");
    return;
  }

  // ── FREQUENCY CAP ─────────────────────────────────────────────────────
  var LS_SHOWN = "pnc_popup_shown_at";
  var LS_DONE  = "pnc_popup_submitted";
  function recentlyShown() {
    try {
      if (localStorage.getItem(LS_DONE) === "1") return true;
      var t = parseInt(localStorage.getItem(LS_SHOWN) || "0", 10);
      return t && (Date.now() - t) < SNOOZE_DAYS * 864e5;
    } catch (e) { return false; }
  }
  function markShown()     { try { localStorage.setItem(LS_SHOWN, String(Date.now())); } catch (e) {} }
  function markSubmitted() { try { localStorage.setItem(LS_DONE, "1"); } catch (e) {} }

  if (recentlyShown()) return;

  // ── STYLES ────────────────────────────────────────────────────────────
  var css = ''
    + '.pnc-pop-overlay{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;'
    + 'justify-content:center;padding:20px;background:rgba(17,17,17,.6);opacity:0;'
    + 'transition:opacity .3s ease;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);}'
    + '.pnc-pop-overlay.pnc-open{opacity:1;}'
    + '.pnc-pop-card{position:relative;width:100%;max-width:440px;background:#fff;border-radius:16px;'
    + 'box-shadow:0 24px 60px rgba(0,0,0,.28);padding:34px 30px 26px;text-align:center;'
    + 'transform:translateY(16px) scale(.98);transition:transform .3s ease;font-family:"Lato",Arial,sans-serif;}'
    + '.pnc-pop-overlay.pnc-open .pnc-pop-card{transform:translateY(0) scale(1);}'
    + '.pnc-pop-logo{height:34px;width:auto;margin:0 auto 16px;display:block;}'
    + '.pnc-pop-card h2{font-family:"Montserrat",Arial,sans-serif;font-size:1.7rem;line-height:1.15;'
    + 'font-weight:800;letter-spacing:-.02em;color:#111;margin:0 0 10px;}'
    + '.pnc-pop-card p.pnc-sub{font-size:.98rem;line-height:1.5;color:#555;margin:0 0 18px;}'
    + '.pnc-pop-form{width:100%;border:none;display:block;}'
    + '.pnc-pop-close{position:absolute;top:12px;right:14px;width:32px;height:32px;border:none;'
    + 'background:#f2f2f4;border-radius:50%;color:#555;font-size:20px;line-height:1;cursor:pointer;'
    + 'display:flex;align-items:center;justify-content:center;transition:background .2s,color .2s;}'
    + '.pnc-pop-close:hover{background:#111;color:#fff;}'
    + '.pnc-pop-dismiss{display:inline-block;margin-top:14px;background:none;border:none;'
    + 'color:#999;font-size:.85rem;cursor:pointer;text-decoration:underline;font-family:inherit;}'
    + '.pnc-pop-dismiss:hover{color:#555;}'
    + '@media (max-width:480px){.pnc-pop-card{max-width:100%;border-radius:16px 16px 0 0;'
    + 'padding:28px 20px 20px;}.pnc-pop-overlay{align-items:flex-end;padding:0;}'
    + '.pnc-pop-card h2{font-size:1.45rem;}}'
    + '@media (prefers-reduced-motion:reduce){.pnc-pop-overlay,.pnc-pop-card{transition:none;}}';

  var styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── MARKUP ────────────────────────────────────────────────────────────
  var overlay = document.createElement("div");
  overlay.className = "pnc-pop-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", HEADLINE);
  overlay.innerHTML = ''
    + '<div class="pnc-pop-card">'
    +   '<button class="pnc-pop-close" aria-label="Close">×</button>'
    +   '<img class="pnc-pop-logo" src="/brand/logo-landscape.svg" alt="Print & Craft Co.">'
    +   '<h2>' + HEADLINE + '</h2>'
    +   '<p class="pnc-sub">' + SUBTEXT + '</p>'
    +   '<iframe class="pnc-pop-form" src="' + GHL_FORM_URL + '" '
    +     'style="width:100%;min-height:' + FORM_HEIGHT + 'px;border:none;" '
    +     'title="Discount signup form" scrolling="no"></iframe>'
    +   '<button class="pnc-pop-dismiss">No thanks, maybe later</button>'
    + '</div>';

  var closed = false;
  function open() {
    if (closed || document.body.contains(overlay)) return;
    document.body.appendChild(overlay);
    // load GHL's resizer for the embedded form
    if (!document.querySelector('script[src*="form_embed.js"]')) {
      var s = document.createElement("script");
      s.src = "https://links.scalesmartsoftware.com/js/form_embed.js";
      document.body.appendChild(s);
    }
    requestAnimationFrame(function () { overlay.classList.add("pnc-open"); });
    markShown();
    teardownTriggers();
  }
  function close() {
    closed = true;
    overlay.classList.remove("pnc-open");
    setTimeout(function () { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 300);
    teardownTriggers();
  }

  // ── TRIGGERS ──────────────────────────────────────────────────────────
  var armed = false, timer = null;
  function onExit(e) { if (armed && e.clientY <= 0) open(); }
  function onKey(e)  { if (e.key === "Escape") close(); }

  function setupTriggers() {
    timer = setTimeout(open, TIMED_DELAY);
    // exit-intent only makes sense with a real cursor (desktop)
    if (window.matchMedia && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      setTimeout(function () { armed = true; }, ARM_EXIT_AFTER);
      document.addEventListener("mouseout", onExit);
    }
  }
  function teardownTriggers() {
    if (timer) { clearTimeout(timer); timer = null; }
    document.removeEventListener("mouseout", onExit);
  }

  overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
  overlay.querySelector(".pnc-pop-close").addEventListener("click", close);
  overlay.querySelector(".pnc-pop-dismiss").addEventListener("click", close);
  document.addEventListener("keydown", onKey);

  // Best-effort: detect GHL form submission to suppress future popups.
  window.addEventListener("message", function (e) {
    if (typeof e.data === "string" && /form.*submit|submitted/i.test(e.data)) markSubmitted();
    else if (e.data && typeof e.data === "object" &&
             /submit/i.test(JSON.stringify(e.data)) && /form/i.test(JSON.stringify(e.data))) {
      markSubmitted();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupTriggers);
  } else {
    setupTriggers();
  }
})();
