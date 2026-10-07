# Vice City News

Site communautaire (non-officiel, non affilié à Rockstar Games / Take-Two) dédié à l'actualité, aux guides et à la communauté autour de GTA 6.

## Comment voir le site

Aucune installation n'est nécessaire (pas de Node.js requis).

**Option simple** : double-clique sur `index.html`, il s'ouvrira dans ton navigateur.

**Option recommandée** (évite certains bugs de chargement de police/JS) : installe l'extension VS Code **"Live Server"**, clique droit sur `index.html` → "Open with Live Server".

## Structure du projet

```
vicecitynews/
├── index.html                   Page d'accueil
├── actualites.html               Actualités (filtrables, + résumé "ce qu'on sait")
├── actu-*.html                   Une page par actualité vérifiée (cliquable depuis les cartes)
├── guides.html                   Guides (verrouillés jusqu'à la sortie du jeu)
├── astuces.html                  Astuces & préparation
├── descriptions.html             Page "hub" descriptions
├── descriptions-armes.html
├── descriptions-vehicules.html
├── descriptions-maps.html
├── descriptions-items.html
├── descriptions-personnages.html
├── descriptions-missions.html
├── perso-*.html                  Fiches Jason Duval / Lucia Caminos
├── map-*.html                    Fiches des 6 régions officielles de Leonida
├── videos.html                   Vidéos communautaires (liens YouTube/Twitch)
├── forum.html                    Maquette visuelle du forum (pas encore fonctionnel)
├── 404.html                      Page d'erreur personnalisée
├── rss.xml                       Flux RSS des actualités
├── css/style.css                 Toute la charte graphique (couleurs, thème néon)
├── js/main.js                    Menu mobile, filtres, compte à rebours
├── research/                     Recherches brutes archivées (pas publiées, pas liées depuis le site)
└── assets/img/logo-mark.svg      Logo original (SVG, aucun copyright Rockstar)
```

## État actuel du contenu

Les infos suivantes sont **vérifiées et sourcées** (recoupement de plusieurs sources fiables) : date de sortie (19 nov. 2026), plateformes, précommandes/prix, carte (État de Leonida + régions), protagonistes (Jason Duval, Lucia Caminos), plusieurs personnages secondaires, une quinzaine de véhicules nommés, les grandes lignes du système d'armes/objets.

Ce qui reste en **placeholder** ("exemple") faute de source fiable à ce jour : missions détaillées, armes de corps à corps précises, tenues nommées, faune spécifique. Rien n'est inventé — ces fiches restent volontairement vides plutôt que de présenter une supposition comme un fait.

## Images

- `assets/img/official/` : captures officielles de la galerie média de Rockstar (créditées sur chaque page).
- `assets/img/real/` : photos réelles sous licence libre (Wikimedia Commons) pour les fiches sans visuel officiel ; auteurs et licences listés sur `credits.html` et sur chaque fiche. Ce ne sont pas des captures du jeu.

## À faire avant une mise en ligne publique

- Le site est publié sur **https://vicecitynews.fr** via GitHub Pages (dépôt `houpacar/vicecitynews`, branche `master`, dossier racine). Le fichier `CNAME` indique le domaine à GitHub ; `.nojekyll` désactive le traitement Jekyll ; `sitemap.xml` et `robots.txt` servent au référencement. Les balises `og:url`, `og:image` et `canonical` utilisent des adresses absolues en `https://vicecitynews.fr` (le script de préparation est à relancer si de nouvelles pages sont ajoutées, ou mettre à jour `sitemap.xml` à la main).
- Le formulaire "Proposer une vidéo" (page `videos.html`) envoie vers `contact@vicecitynews.fr` (voir `initVideoSubmitForm()` dans `js/main.js`) — cette adresse doit être créée ou redirigée chez domaine.fr.
- `404.html` est reconnu automatiquement par GitHub Pages et Netlify comme page d'erreur ; sur un autre hébergeur, il faudra peut-être le configurer manuellement.

## Prochaines étapes possibles

1. **Continuer à enrichir le contenu** : recherches ciblées supplémentaires (missions, tenues, corps-à-corps) au fur et à mesure des annonces officielles.
2. **Visuels** : remplacer les blocs "VISUEL À VENIR" par de vraies images une fois fournies (voir dossier `assets/img/`).
3. **Rendre le forum fonctionnel** : nécessite un vrai backend (comptes, base de données). Projet à part, à aborder avec Next.js + une base de données une fois le design validé.
4. **Veille d'actualités automatisée** : une tâche planifiée Claude (`veille-gta6-news`) tourne déjà tous les 3 jours et signale les nouveautés à intégrer manuellement. L'« Extended Look » (26 min de gameplay, 27 août 2026) a depuis été diffusé et intégré au site.
5. **Mettre le site en ligne gratuitement** : par exemple avec GitHub Pages ou Netlify (glisser-déposer le dossier). Je peux te guider pas à pas le moment venu.

## Petit lexique Git pour débuter

Ce dossier est déjà initialisé en dépôt Git (`git init`), ce qui permet de garder un historique des modifications.

- `git status` : voir ce qui a changé
- `git add .` : préparer tous les fichiers modifiés
- `git commit -m "message"` : enregistrer une version dans l'historique
- `git log` : voir l'historique des versions

Tu n'as pas besoin de tout maîtriser tout de suite — demande-moi simplement de faire un commit quand tu veux sauvegarder une étape.

## Mention légale

Vice City News est un site de fans indépendant. « Grand Theft Auto », « GTA » et tout élément visuel ou nom associé sont des marques déposées de Rockstar Games / Take-Two Interactive. Ce projet n'utilise aucun asset (logo, image, texte) protégé par leurs droits d'auteur — toute l'identité visuelle (couleurs, formes, logo) est originale.


## Forum

Le forum est un phpBB 3.3.19 (pack français) installé sur l'hébergement Plesk de domaine.fr, à l'adresse https://forum.vicecitynews.fr (base MariaDB `vcn_forum`, certificat Let's Encrypt). Inscriptions avec activation par e-mail + question anti-robot ; extension VigLink désactivée. La page `forum.html` du site sert de porte d'entrée vers le forum.
