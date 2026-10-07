/* Vice City News — carte interactive de Leonida (schéma).
   Données : js/carte-data.js (VCN_CARTE.places / VCN_CARTE.zones). */
(function () {
  const svg = document.getElementById("leonida-map");
  if (!svg || typeof VCN_CARTE === "undefined") return;

  const card = document.querySelector(".map-card");
  const list = document.querySelector(".map-list");
  const listTitle = document.querySelector(".map-list-wrap h3");
  const search = document.getElementById("map-search");
  const datalist = document.getElementById("map-places");
  const places = VCN_CARTE.places;
  const zones = Object.fromEntries(VCN_CARTE.zones.map((z) => [z.id, z]));

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function showCard(item, label, extra) {
    card.innerHTML = `
      ${item.thumb ? `<img src="${esc(item.thumb)}" alt="" loading="lazy">` : ""}
      <span class="map-card-type">${esc(label)}</span>
      <h3>${esc(item.name)}</h3>
      ${extra ? `<p class="map-card-zone">${esc(extra)}</p>` : ""}
      <p>${esc(item.text || "")}</p>
      <a class="btn btn-primary map-card-link" href="${esc(item.page)}">Voir la fiche →</a>`;
  }

  function fillList(zoneId) {
    const items = places.filter((p) => p.zone === zoneId);
    listTitle.textContent = zoneId ? `LIEUX — ${zones[zoneId].name.toUpperCase()}` : "LIEUX";
    list.innerHTML = items.length
      ? items.map((p) => `<li><button type="button" data-id="${p.id}"><span class="dot dot-${p.type}"></span>${esc(p.name)}</button></li>`).join("")
      : `<li class="map-list-empty">Aucun lieu précis connu pour l'instant.</li>`;
  }

  function clearActive() {
    svg.querySelectorAll(".active").forEach((el) => el.classList.remove("active"));
  }

  function selectZone(id) {
    const z = zones[id];
    if (!z) return;
    clearActive();
    svg.querySelectorAll(`[data-zone="${id}"]`).forEach((el) => el.classList.add("active"));
    showCard(z, z.label, z.note);
    fillList(id);
  }

  function selectPlace(id, center) {
    const p = places.find((x) => x.id === id);
    if (!p) return;
    clearActive();
    if (p.zone) svg.querySelectorAll(`[data-zone="${p.zone}"]`).forEach((el) => el.classList.add("active"));
    const pin = svg.querySelector(`.pin[data-id="${id}"]`);
    if (pin) pin.classList.add("active");
    showCard(p, p.label, p.zoneName);
    fillList(p.zone);
    if (center) zoomTo(p.x, p.y, 2);
  }

  // Clics et clavier sur la carte
  svg.addEventListener("click", (e) => {
    const pin = e.target.closest(".pin");
    if (pin) return selectPlace(pin.dataset.id);
    const zone = e.target.closest("[data-zone]");
    if (zone) selectZone(zone.dataset.zone);
  });
  svg.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const pin = e.target.closest(".pin");
    const zone = e.target.closest("[data-zone]");
    if (pin || zone) e.preventDefault();
    if (pin) selectPlace(pin.dataset.id);
    else if (zone) selectZone(zone.dataset.zone);
  });
  list.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-id]");
    if (b) selectPlace(b.dataset.id, true);
  });

  // Filtres par type de lieu
  document.querySelectorAll("[data-map-filter]").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("[data-map-filter]").forEach((c) => c.classList.toggle("active", c === chip));
      const f = chip.dataset.mapFilter;
      svg.querySelectorAll(".pin").forEach((pin) => {
        pin.classList.toggle("is-hidden", f !== "all" && pin.dataset.type !== f);
      });
    });
  });

  // Recherche
  datalist.innerHTML = places.map((p) => `<option value="${esc(p.name)}">`).join("");
  search.addEventListener("change", () => {
    const q = search.value.trim().toLowerCase();
    if (!q) return;
    const p = places.find((x) => x.name.toLowerCase() === q) || places.find((x) => x.name.toLowerCase().includes(q));
    if (p) selectPlace(p.id, true);
  });

  // Zoom / déplacement (viewBox)
  const full = { x: 0, y: 0, w: 600, h: 820 };
  let vb = { ...full };
  const apply = () => svg.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
  const clamp = () => {
    vb.w = Math.min(full.w, Math.max(150, vb.w));
    vb.h = vb.w * (full.h / full.w);
    vb.x = Math.min(full.w - vb.w, Math.max(0, vb.x));
    vb.y = Math.min(full.h - vb.h, Math.max(0, vb.y));
  };
  function zoomTo(cx, cy, factor) {
    vb.w = full.w / factor;
    clamp();
    vb.x = cx - vb.w / 2;
    vb.y = cy - vb.h / 2;
    clamp();
    apply();
  }
  function zoomBy(f) {
    const cx = vb.x + vb.w / 2, cy = vb.y + vb.h / 2;
    vb.w = vb.w / f;
    clamp();
    vb.x = cx - vb.w / 2;
    vb.y = cy - vb.h / 2;
    clamp();
    apply();
  }
  document.querySelectorAll("[data-zoom]").forEach((b) => b.addEventListener("click", () => {
    const z = b.dataset.zoom;
    if (z === "in") zoomBy(1.5);
    else if (z === "out") zoomBy(1 / 1.5);
    else { vb = { ...full }; apply(); }
  }));
  // glisser pour se déplacer quand on est zoomé
  let drag = null;
  svg.addEventListener("pointerdown", (e) => {
    if (vb.w >= full.w) return;
    drag = { x: e.clientX, y: e.clientY, vx: vb.x, vy: vb.y, moved: false };
  });
  window.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const r = svg.getBoundingClientRect();
    const dx = (e.clientX - drag.x) * (vb.w / r.width), dy = (e.clientY - drag.y) * (vb.h / r.height);
    if (Math.abs(dx) + Math.abs(dy) > 2) drag.moved = true;
    vb.x = drag.vx - dx;
    vb.y = drag.vy - dy;
    clamp();
    apply();
  });
  window.addEventListener("pointerup", () => { drag = null; });

  // Sélection initiale : lieu indiqué dans l'adresse (#vice-beach, #zone-kelly…) ou Vice City
  function fromHash() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (h.startsWith("zone-") && zones[h.slice(5)]) selectZone(h.slice(5));
    else if (places.some((p) => p.id === h)) selectPlace(h, true);
    else selectPlace("vice-city");
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();
})();
