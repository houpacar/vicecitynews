/* Vice City News — jauges de statistiques des armes et comparateur.
   Stats : barres officielles Rockstar Games Social Club de l'arme équivalente dans GTA V (via GTA Wiki).
   "mob" (mobilité) : estimation Vice City News selon le type d'arme. */
const VCN_ARMES = {"heavy-pistol": {"name": "Heavy Pistol","cat": "poing","gtav": "Heavy Pistol","stats": {"damage": 40,"fire_rate": 40,"accuracy": 50,"range": 35,"clip_size": 20},"mob": 85},"mustang-357-revolver": {"name": "Mustang .357 Revolver","cat": "poing","gtav": "Heavy Revolver","stats": {"damage": 70,"fire_rate": 20,"accuracy": 65,"range": 35,"clip_size": 6},"mob": 85},"pistolet-standard": {"name": "Pistolet standard","cat": "poing","gtav": "Pistol","stats": {"damage": 26,"fire_rate": 40,"accuracy": 40,"range": 25,"clip_size": 10},"mob": 85},"pistolet-a-chargeur-rapide": {"name": "Pistolet à chargeur rapide","cat": "poing","gtav": "","stats": {},"mob": 85},"pistolet-compact-380": {"name": "Pistolet compact .380","cat": "poing","gtav": "SNS Pistol","stats": {"damage": 30,"fire_rate": 40,"accuracy": 40,"range": 20,"clip_size": 3},"mob": 90},"beretta-92fs": {"name": "Beretta 92FS","cat": "poing","gtav": "Pistol","stats": {"damage": 26,"fire_rate": 40,"accuracy": 40,"range": 25,"clip_size": 10},"mob": 85},"fusil-a-canon-double": {"name": "Fusil à canon double","cat": "pompe","gtav": "Double Barrel Shotgun","stats": {"damage": 98,"fire_rate": 25,"accuracy": 15,"range": 10,"clip_size": 5},"mob": 60},"fusil-a-pompe": {"name": "Fusil à pompe","cat": "pompe","gtav": "","stats": {},"mob": 60},"mitrailleuse-de-combat": {"name": "Mitrailleuse de combat","cat": "smg","gtav": "Combat MG","stats": {"damage": 32,"fire_rate": 65,"accuracy": 45,"range": 60,"clip_size": 70},"mob": 35},"smg-compacte": {"name": "SMG compacte","cat": "smg","gtav": "Mini SMG","stats": {"damage": 22,"fire_rate": 84,"accuracy": 30,"range": 25,"clip_size": 14},"mob": 80},"micro-smg": {"name": "Micro SMG","cat": "smg","gtav": "","stats": {},"mob": 85},"smg-standard": {"name": "SMG standard","cat": "smg","gtav": "","stats": {},"mob": 75},"fusil-d-assaut": {"name": "Fusil d'assaut","cat": "assaut","gtav": "Assault Rifle","stats": {"damage": 30,"fire_rate": 60,"accuracy": 45,"range": 45,"clip_size": 40},"mob": 60},"carabine": {"name": "Carabine","cat": "assaut","gtav": "Carbine Rifle","stats": {"damage": 32,"fire_rate": 65,"accuracy": 55,"range": 45,"clip_size": 40},"mob": 60},"carabine-mk-ii": {"name": "Carabine Mk II","cat": "assaut","gtav": "Carbine Rifle Mk II","stats": {"damage": 36,"fire_rate": 65,"accuracy": 55,"range": 45,"clip_size": 40},"mob": 60},"carabine-de-service": {"name": "Carabine de service","cat": "assaut","gtav": "Service Carbine","stats": {"damage": 39,"fire_rate": 63,"accuracy": 55,"range": 45,"clip_size": 40},"mob": 60},"duke-556": {"name": "Duke 556","cat": "assaut","gtav": "","stats": {},"mob": 60},"fusil-de-precision-d-assaut": {"name": "Fusil de précision d'assaut","cat": "precision","gtav": "","stats": {},"mob": 45},"fusil-a-verrou": {"name": "Fusil à verrou","cat": "precision","gtav": "Sniper Rifle","stats": {"damage": 96,"fire_rate": 25,"accuracy": 70,"range": 95,"clip_size": 10},"mob": 45},"fusil-longue-portee": {"name": "Fusil longue portée","cat": "precision","gtav": "Heavy Sniper","stats": {"damage": 98,"fire_rate": 20,"accuracy": 90,"range": 100,"clip_size": 5},"mob": 35},"fusil-de-precision-semi-auto": {"name": "Fusil de précision semi-auto","cat": "precision","gtav": "Marksman Rifle","stats": {"damage": 70,"fire_rate": 40,"accuracy": 80,"range": 90,"clip_size": 10},"mob": 45},"carabine-22": {"name": "Carabine .22","cat": "precision","gtav": "","stats": {},"mob": 65},"lance-grenades": {"name": "Lance-grenades","cat": "lourde","gtav": "Grenade Launcher","stats": {"damage": 95,"fire_rate": 20,"accuracy": 10,"range": 50,"clip_size": 20},"mob": 25},"lance-roquettes": {"name": "Lance-roquettes","cat": "lourde","gtav": "RPG","stats": {"damage": 100,"fire_rate": 5,"accuracy": 10,"range": 70,"clip_size": 10},"mob": 25},"bouteille-incendiaire": {"name": "Bouteille incendiaire","cat": "jet","gtav": "Molotov Cocktail","stats": {"damage": 50,"fire_rate": 20,"accuracy": 20,"range": 8,"clip_size": 10},"mob": 80},"grenade-aveuglante": {"name": "Grenade aveuglante","cat": "jet","gtav": "","stats": {},"mob": 80},"balle-de-golf": {"name": "Balle de golf","cat": "jet","gtav": "","stats": {},"mob": 80},"grenade": {"name": "Grenade","cat": "jet","gtav": "Grenade","stats": {"damage": 95,"fire_rate": 20,"accuracy": 10,"range": 15,"clip_size": 10},"mob": 80},"cocktail-molotov": {"name": "Cocktail Molotov","cat": "jet","gtav": "Molotov Cocktail","stats": {"damage": 50,"fire_rate": 20,"accuracy": 20,"range": 8,"clip_size": 10},"mob": 80},"grenade-fumigene": {"name": "Grenade fumigène","cat": "jet","gtav": "Tear Gas (gaz lacrymogène)","stats": {"damage": 10,"fire_rate": 20,"accuracy": 10,"range": 15,"clip_size": 10},"mob": 80},"fusil-sous-marin": {"name": "Fusil sous-marin","cat": "jet","gtav": "","stats": {},"mob": 50},"batte-de-baseball": {"name": "Batte de baseball","cat": "melee","gtav": "Baseball Bat","stats": {"damage": 20,"fire_rate": 10,"range": 1},"mob": 90},"pied-de-biche": {"name": "Pied-de-biche","cat": "melee","gtav": "Crowbar","stats": {"damage": 10,"fire_rate": 15,"range": 1},"mob": 90},"club-de-golf": {"name": "Club de golf","cat": "melee","gtav": "Golf Club","stats": {"damage": 20,"fire_rate": 10,"range": 1},"mob": 90},"marteau": {"name": "Marteau","cat": "melee","gtav": "Hammer","stats": {"damage": 10,"fire_rate": 15,"range": 1},"mob": 90},"couteau": {"name": "Couteau","cat": "melee","gtav": "Knife","stats": {"damage": 15,"fire_rate": 20,"range": 1},"mob": 90},"queue-de-billard": {"name": "Queue de billard","cat": "melee","gtav": "Pool Cue","stats": {"damage": 20,"fire_rate": 10,"range": 0},"mob": 90},"combat-a-mains-nues": {"name": "Combat à mains nues","cat": "melee","gtav": "Poings","stats": {"damage": 5,"fire_rate": 20,"range": 1},"mob": 100},"carabine-duke-special-ops": {"name": "Carabine Duke « Special Ops »","cat": "assaut","gtav": "","stats": {},"mob": 60},"club-de-minigolf": {"name": "Club de minigolf","cat": "melee","gtav": "","stats": {},"mob": 90},"pistolet-capo": {"name": "Pistolet Capo (nom non confirmé)","cat": "poing","gtav": "","stats": {},"mob": 85}};

const STAT_LABELS = [
  ["damage", "Dégâts"], ["fire_rate", "Cadence de tir"], ["accuracy", "Précision"],
  ["range", "Portée"], ["clip_size", "Chargeur"], ["mob", "Mobilité (estim.)"]
];

// Animation des jauges quand elles entrent à l'écran
function initStatAnimation(root) {
  const panels = (root || document).querySelectorAll(".weapon-stats");
  if (!("IntersectionObserver" in window)) return;
  panels.forEach((p) => p.classList.add("pre"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        requestAnimationFrame(() => e.target.classList.remove("pre"));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  panels.forEach((p) => io.observe(p));
}

// Comparateur (page Armes)
function initComparator() {
  const box = document.getElementById("comparateur");
  if (!box) return;
  const selA = box.querySelector("#cmp-a");
  const selB = box.querySelector("#cmp-b");
  const out = box.querySelector(".compare-grid");
  const cats = { poing: "Armes de poing", smg: "Mitraillettes", assaut: "Fusils d'assaut", pompe: "Fusils à pompe",
    precision: "Fusils de précision", lourde: "Armes lourdes", jet: "Jet / explosifs", melee: "Corps à corps" };
  [selA, selB].forEach((sel) => {
    Object.keys(cats).forEach((c) => {
      const g = document.createElement("optgroup");
      g.label = cats[c];
      Object.entries(VCN_ARMES).filter(([, w]) => w.cat === c)
        .sort((a, b) => a[1].name.localeCompare(b[1].name, "fr"))
        .forEach(([slug, w]) => {
          const o = document.createElement("option");
          o.value = slug;
          o.textContent = w.name + (Object.keys(w.stats).length ? "" : " (pas de données)");
          g.appendChild(o);
        });
      sel.appendChild(g);
    });
  });
  selA.value = "heavy-pistol";
  selB.value = "fusil-d-assaut";

  const row = (cls, v) => v === undefined
    ? `<div class="compare-na">non disponible</div>`
    : `<div class="stat-row ${cls}"><span class="stat-bar"><span class="stat-fill" style="--v:${v}%"></span></span><span class="stat-val">${v}</span></div>`;

  function render() {
    const a = VCN_ARMES[selA.value], b = VCN_ARMES[selB.value];
    const val = (w, k) => (k === "mob" ? w.mob : w.stats[k]);
    out.innerHTML = STAT_LABELS.map(([k, lab]) => `
      <div class="compare-row">
        <span class="stat-label">${lab}</span>
        <div class="compare-bars">${row("a" + (k === "mob" ? " est" : ""), val(a, k))}${row("b" + (k === "mob" ? " est" : ""), val(b, k))}</div>
      </div>`).join("");
    box.querySelector(".la").textContent = a.name + (a.gtav ? ` (réf. GTA V : ${a.gtav})` : "");
    box.querySelector(".lb").textContent = b.name + (b.gtav ? ` (réf. GTA V : ${b.gtav})` : "");
  }
  selA.addEventListener("change", render);
  selB.addEventListener("change", render);
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  initStatAnimation();
  initComparator();
});
