# Vice City News

Site communautaire (non-officiel, non affilié à Rockstar Games / Take-Two) dédié à l'actualité, aux guides et à la communauté autour de GTA 6.

## Comment voir le site

Aucune installation n'est nécessaire (pas de Node.js requis).

**Option simple** : double-clique sur `index.html`, il s'ouvrira dans ton navigateur.

**Option recommandée** (évite certains bugs de chargement de police/JS) : installe l'extension VS Code **"Live Server"**, clique droit sur `index.html` → "Open with Live Server".

## Structure du projet

```
vicecitynews/
├── index.html                  Page d'accueil
├── actualites.html              Actualités (filtrables par catégorie)
├── guides.html                  Guides (verrouillés jusqu'à la sortie du jeu)
├── astuces.html                 Astuces & préparation
├── descriptions.html            Page "hub" descriptions
├── descriptions-armes.html
├── descriptions-vehicules.html
├── descriptions-maps.html
├── descriptions-items.html
├── forum.html                   Maquette visuelle du forum (pas encore fonctionnel)
├── css/style.css                Toute la charte graphique (couleurs, thème néon)
├── js/main.js                   Menu mobile, filtres, compte à rebours
└── assets/img/logo-mark.svg     Logo original (SVG, aucun copyright Rockstar)
```

## État actuel du contenu

Tout le contenu (articles, armes, véhicules...) est actuellement du **placeholder** ("exemple"), pour valider le design et la structure avant de le remplir avec de vraies informations.

## Prochaines étapes possibles

1. **Remplir le contenu réel** : je peux faire des recherches web pour toi et rédiger de vrais articles/fiches classés par thème et par date — il suffit de me le demander.
2. **Rendre le forum fonctionnel** : nécessite un vrai backend (comptes, base de données). C'est un projet à part, que l'on pourra aborder avec Next.js + une base de données une fois le design validé.
3. **Automatiser la veille d'actualités** : possible via une "tâche planifiée" Claude qui relance une recherche à intervalle régulier — demande-le-moi quand tu seras prêt.
4. **Mettre le site en ligne gratuitement** : par exemple avec GitHub Pages ou Netlify (glisser-déposer le dossier). Je peux te guider pas à pas le moment venu.

## Petit lexique Git pour débuter

Ce dossier est déjà initialisé en dépôt Git (`git init`), ce qui permet de garder un historique des modifications.

- `git status` : voir ce qui a changé
- `git add .` : préparer tous les fichiers modifiés
- `git commit -m "message"` : enregistrer une version dans l'historique
- `git log` : voir l'historique des versions

Tu n'as pas besoin de tout maîtriser tout de suite — demande-moi simplement de faire un commit quand tu veux sauvegarder une étape.

## Mention légale

Vice City News est un site de fans indépendant. « Grand Theft Auto », « GTA » et tout élément visuel ou nom associé sont des marques déposées de Rockstar Games / Take-Two Interactive. Ce projet n'utilise aucun asset (logo, image, texte) protégé par leurs droits d'auteur — toute l'identité visuelle (couleurs, formes, logo) est originale.
