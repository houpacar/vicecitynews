/* =========================================================
   VICE CITY NEWS — script commun à toutes les pages
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initDropdowns();
  initFilters();
  initCountdown();
  initVideoSubmitForm();
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

/* ---- Formulaire "Proposer une vidéo" (page Vidéos) ----
   Pas de backend sur ce site statique : le formulaire compose
   un e-mail (mailto:) pré-rempli avec la catégorie choisie par
   le créateur, plutôt que d'envoyer les données quelque part. */
function initVideoSubmitForm() {
  const form = document.getElementById("video-submit-form");
  if (!form) return;

  const status = document.getElementById("video-submit-status");
  const CONTACT_EMAIL = "contact@vicecitynews.example"; // à remplacer par une vraie adresse avant mise en ligne

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["creator-name"].value.trim();
    const category = form.elements["video-category"];
    const categoryLabel = category.options[category.selectedIndex]?.text || "";
    const platform = form.elements["video-platform"].value;
    const link = form.elements["video-link"].value.trim();
    const message = form.elements["video-message"].value.trim();

    if (!name || !category.value || !link) {
      if (status) {
        status.textContent = "Merci de renseigner au moins votre nom, une catégorie et le lien de la vidéo.";
        status.classList.add("visible");
      }
      return;
    }

    const subject = `[Proposition vidéo] ${categoryLabel} — ${name}`;
    const bodyLines = [
      `Créateur / chaîne : ${name}`,
      `Catégorie choisie : ${categoryLabel}`,
      `Plateforme : ${platform}`,
      `Lien de la vidéo : ${link}`,
      "",
      message || "(pas de message additionnel)",
    ];
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;

    if (status) {
      status.textContent = "Votre client mail va s'ouvrir avec le message pré-rempli : il ne restera plus qu'à l'envoyer.";
      status.classList.add("visible");
    }
  });
}
