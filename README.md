# Site Ndindi'O — refonte

Site vitrine statique pour **Ndindi'O**, eau minérale naturelle premium issue de la source de Touba Affè (Sénégal).

Refonte du site WordPress existant (https://eaundindi.com) en HTML/CSS/JS statique :
aucun build, aucune dépendance à installer, déployable tel quel.

## Structure

```
/
├── index.html            Accueil
├── notre-eau.html        La source, l'histoire, le process en 6 étapes
├── nos-formats.html      350 ml · 1,5 L · 10 L + guide d'usage + conservation
├── engagement.html       Durabilité, santé, ancrage local, chantiers en cours
├── distribution.html     Dépôts, logistique, programme revendeurs (+ formulaire)
├── mediatheque.html      Vidéo, galerie filtrable avec lightbox
├── contact.html          Coordonnées, formulaire, dépôts, FAQ
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css     Système de design complet (tokens, composants, responsive)
    ├── js/main.js        Menu mobile, scroll reveal, compteurs, filtres, lightbox, formulaires
    ├── img/              Visuels récupérés depuis le site actuel
    └── video/athlete.mp4
```

## Lancer en local

```bash
python -m http.server 8000
```

Puis ouvrir http://localhost:8000

## Déploiement

Le site est 100 % statique. Déposer le contenu du dossier tel quel sur :

- **Cloudflare Pages** — build command : *(aucune)*, output directory : `/`
- ou tout hébergement classique (FTP, Netlify, GitHub Pages…)

Avant mise en ligne : remplacer les URL `https://eaundindi.com/...` des balises
`<link rel="canonical">` et de `sitemap.xml` si le domaine change.

## Contenu

Tous les textes de l'ancien site ont été repris **mot pour mot** puis enrichis
(pages Notre eau, Nos formats, Engagement, Distribution, FAQ). Les coordonnées,
dépôts et responsables sont ceux publiés sur la page Contact du site actuel.

### À compléter par Ndindi'O

Ces éléments n'ont volontairement **pas** été inventés — ils doivent être fournis
par l'entreprise avant publication. Ils sont signalés par des commentaires
`<!-- À COMPLÉTER PAR NDINDI'O -->` dans le code.

| Où | Quoi |
|---|---|
| `notre-eau.html` | Tableau d'analyse minérale officielle (mg/L, pH, résidu sec) tel qu'il figure sur l'étiquette |
| `notre-eau.html` | Références de certification / d'agrément sanitaire |
| `nos-formats.html` | Fiches logistiques : unités par pack, dimensions, poids, palettisation, codes EAN |
| Toutes pages | Ajouter les mentions légales / politique de confidentialité si nécessaire |

La raison sociale « Ndindi Industries SARL » affichée en pied de page provient du marquage
du véhicule de livraison de la marque — à confirmer avant publication.

Aucun chiffre non vérifié (capacité de production, effectifs, parts de marché,
nombre de points de vente) n'a été publié.

## Visuels produit — affiche Korité

Les trois cartes de format (accueil + Nos formats) sont découpées dans **une seule
et même affiche** fournie par la marque (`images/WhatsApp Image 2026-09-09 at 20.08.26.jpeg`,
visuel Korité). C'est le seul document qui montre les trois contenants côte à côte.

| Fichier | Format | Découpe dans l'affiche (x0, y0, x1, y1) |
|---|---|---|
| `produit-350.jpg` | 350 ml | 145, 700, 292, 1200 |
| `produit-15l.jpg` | 1,5 L | 540, 600, 750, 1195 |
| `produit-10l.jpg` | 10 L | 232, 250, 552, 1185 |

Comme les trois découpes proviennent de la même prise de vue, elles partagent
l'éclairage et le fond. La hauteur d'affichage de chaque vignette
(`--shot-h` : 215 / 255 / 400 px) reproduit l'échelle réelle entre les formats,
et les trois reposent sur une ligne de base commune.

**Deux retouches à connaître :**

1. Le filigrane TikTok `@ndindi69` traversait la bande bleue de l'étiquette du
   1,5 L. Cette bande a été reconstruite (zone x 628–746, y 922–960, remplie
   ligne par ligne avec la couleur moyenne de la portion propre située à gauche).
2. La découpe du 10 L laisse apparaître de fins fragments des deux autres
   bouteilles sur ses bords bas : les contenants se chevauchent dans l'affiche,
   un détourage parfait est impossible.

**À fournir idéalement :** des photos packshot individuelles sur fond neutre
pour chaque format. L'affiche Korité est un montage promotionnel, pas une prise
de vue produit.

## Autres visuels fournis par la marque

| Fichier | Usage | Source |
|---|---|---|
| `bouteille-plage.jpg` | Nos formats, section « Le packaging » | `images/Bourteille plage.jpg`, recadré à partir de y=215 pour retirer le titre « La pureté à chaque instant », qui faisait doublon avec le titre de la section. Le badge « Origine Sénégal » et la signature de marque sont conservés. |

Le fichier `images/350BOUTEILLENOUV.jpg` (233×350) est la même photo que
`assets/img/geyser.jpg` (853×1280) : écart moyen de 2,2/255, soit du bruit de
compression. C'est la version haute résolution qui est utilisée sur le site.

## Visuels issus d'Instagram

Les images suivantes proviennent du compte officiel **@eaundindi** (récupérées le 2026-09-09) :

| Fichier | Usage | Source |
|---|---|---|
| `main-bouteille.jpg` | Accueil, section « L'origine » | publication « Bonne semaine », recadrée pour retirer le texte |
| `ig-football.jpg` | Accueil (bloc sport) + médiathèque | affiche « Célébrez la fête du football » |
| `ig-coupe-du-monde.jpg`, `ig-fraicheur.jpg`, `ig-thioki.jpg`, `ig-bonne-semaine.jpg`, `ig-soin-de-vous.jpg` | Médiathèque | affiches de marque |

**Deux limites à connaître :**

1. **Résolution plafonnée à 640 px.** Sans connexion, Instagram ne sert que la
   vignette 640 px et n'expose que les 6 dernières publications. Pour des visuels
   nets en grand format, fournir les fichiers d'origine (les maquettes Canva /
   Photoshop des affiches, et les photos brutes).
2. **Aucune photo de marathon** n'existe sur le compte. L'image de course
   (`marathon.jpg`, visuel générique) a été remplacée par l'affiche football de la
   marque, qui couvre le même territoire « sport ».

### ⚠️ Deux identités de bouteille coexistent

Les affiches Instagram récentes montrent un **packaging à bouchon blanc** (nouvelle
étiquette, signature « Eau pure, Goût parfait »). Les photos héritées de l'ancien
site (`geyser.jpg`, `b1/b2/b3.jpg`, `trois-bouteilles.jpg`, `pack-350.png`,
`bouteille-mains.jpg`, photos lifestyle) montrent l'**ancien packaging**
(bouchon bleu). Il faut trancher avant mise en ligne : soit refaire les photos au
nouveau packaging, soit assumer la cohabitation.

## Formulaires

Les deux formulaires (contact et partenariat) fonctionnent **sans backend** :
ils ouvrent la messagerie du visiteur avec un message pré-rempli vers
`contact@eaundindi.com` (attribut `data-mailto` sur la balise `<form>`).

Pour un envoi serveur (recommandé à terme), brancher un service type Formspree,
Cloudflare Worker ou Web3Forms : il suffit de remplacer le gestionnaire `submit`
dans `assets/js/main.js` et d'ajouter `action` / `method` sur le `<form>`.

## Identité visuelle

- Bleu source `#2FA8E4` · Bleu profond `#0B6FA8` · Vert marque `#35BE45` · Encre `#04182A`
- Titres : **Cormorant Garamond** — Textes : **Manrope** (Google Fonts)
- Toutes les valeurs sont centralisées dans les *custom properties* en haut de `assets/css/style.css`

## Accessibilité & performance

- Navigation au clavier, `aria-current`, `aria-expanded`, `aria-label` sur les icônes
- `prefers-reduced-motion` respecté (animations neutralisées)
- Aucune dépendance JS externe ; seules les polices Google sont chargées à distance
- Images en `loading="lazy"` sous la ligne de flottaison ; visuels lourds recompressés

### Optimisation images

`camionnette2.png` et `fourgonnette.png` ont été redimensionnés (1200 px) et
quantifiés : 2,1 Mo → ~100 Ko chacun, sans perte visible. Le dossier complet
pèse environ 6,8 Mo. Une conversion WebP reste possible pour gagner encore
30 à 40 %.
