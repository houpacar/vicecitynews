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

## À faire avant une mise en ligne publique

- Les balises `og:image`, `og:url` (dans le `<head>` de chaque page) et les liens du fichier `rss.xml` utilisent le domaine provisoire `vicecitynews.example` — à remplacer par le vrai nom de domaine une fois le site déployé (recherche/remplacement global).
- `404.html` est reconnu automatiquement par GitHub Pages et Netlify comme page d'erreur ; sur un autre hébergeur, il faudra peut-être le configurer manuellement.

## Prochaines étapes possibles

1. **Continuer à enrichir le contenu** : recherches ciblées supplémentaires (missions, tenues, corps-à-corps) au fur et à mesure des annonces officielles.
2. **Visuels** : remplacer les blocs "VISUEL À VENIR" par de vraies images une fois fournies (voir dossier `assets/img/`).
3. **Rendre le forum fonctionnel** : nécessite un vrai backend (comptes, base de données). Projet à part, à aborder avec Next.js + une base de données une fois le design validé.
4. **Automatiser la veille d'actualités** : possible via une "tâche planifiée" Claude qui relance une recherche à intervalle régulier — demande-le-moi quand tu seras prêt (utile avec la bande-annonce 3 attendue mi-juillet 2026).
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
