/* =========================================================
   VICE CITY NEWS — script commun à toutes les pages
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initDropdowns();
  initFilters();
  initCountdown();
});

/* ---- Menu mobile ---- */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = nav.classList.contains("open");
    toggle.setAttribute("aria-expanded", String(expanded));
  });
}

/* ---- Sous-menu "Descriptions" (tactile / clavier) ---- */
function initDropdowns() {
  document.querySelectorAll(".nav-item.dropdown > a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth > 760) return; // desktop = hover only
      e.preventDefault();
      link.parentElement.classList.toggle("open");
    });
  });
}

/* ---- Filtres (chips) pour Actualités / Descriptions ---- */
function initFilters() {
  document.querySelectorAll(".filters").forEach((filterBar) => {
    const chips = filterBar.querySelectorAll(".filter-chip");
    const targetSelector = filterBar.dataset.target;
    if (!targetSelector) return;
    const items = document.querySelectorAll(targetSelector);

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        const category = chip.dataset.filter;

        items.forEach((item) => {
          const match = category === "all" || item.dataset.category === category;
          item.style.display = match ? "" : "none";
        });
      });
    });
  });
}

/* ---- Compte à rebours avant la sortie du jeu ----
   Date placeholder : à remplacer par la date officielle
   confirmée (voir data-target sur l'élément #countdown). */
function initCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  const targetDate = new Date(el.dataset.target).getTime();

  function tick() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      el.innerHTML = '<p class="countdown-note">Le compte à rebours est terminé !</p>';
      clearInterval(timer);
      return;
    }

    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    el.querySelector("[data-days]").textContent = String(days).padStart(2, "0");
    el.querySelector("[data-hours]").textContent = String(hours).padStart(2, "0");
    el.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, "0");
    el.querySelector("[data-seconds]").textContent = String(seconds).padStart(2, "0");
  }

  tick();
  const timer = setInterval(tick, 1000);
}
