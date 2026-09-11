# Redirection de l'ancien site vers le nouveau

Ce dossier ne fait pas partie du site. Il contient de quoi rediriger
l'ancien site WordPress `eaundindi.com` vers `https://ndindi-o.pages.dev/`.

## Deux méthodes, par ordre de préférence

### 1. `.htaccess` — recommandé

`htaccess-a-renommer.txt` à renommer en `.htaccess`, à la racine de
l'hébergement. Renvoie un code **301**, compris par les moteurs comme un
déménagement définitif : le référencement acquis est transféré.

WordPress possède déjà un `.htaccess` à la racine. Le sauvegarder, puis
coller le bloc **avant** la ligne `# BEGIN WordPress`.

### 2. `index.html` — solution de repli

`index.html` à déposer à la racine. Redirection côté navigateur, par
`meta refresh` et par `location.replace()`, avec une page d'attente et un
lien manuel si le navigateur bloque la redirection.

**Limite connue :** sur la plupart des hébergements Apache, `DirectoryIndex`
liste `index.php` avant `index.html`. WordPress répondra donc en premier et
ce fichier ne sera jamais servi. Le tester après dépôt ; s'il est ignoré,
passer à la méthode `.htaccess`.

## À faire ensuite

`ndindi-o.pages.dev` est une adresse technique Cloudflare. La bonne cible
finale est le domaine de la marque : rattacher `eaundindi.com` au projet
Cloudflare Pages en domaine personnalisé, puis supprimer la redirection.
Les visiteurs et les moteurs restent alors sur `eaundindi.com`.
