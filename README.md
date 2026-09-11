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

## Visuels produit — packshots officiels

Les trois cartes de format viennent désormais de vraies prises de vue produit
fournies par la marque, et non plus de découpes dans une affiche promotionnelle.

| Fichier | Format | Source | Découpe |
|---|---|---|---|
| `produit-350.jpg` | 350 ml | `images/New/Bureau fille 3 bouteilles de Ndindi.jfif` | 102, 436, 190, 698 |
| `produit-15l.jpg` | 1,5 L | `images/New/Bureau fille 3 bouteilles de Ndindi.jfif` | 186, 310, 296, 698 |
| `produit-10l.jpg` | 10 L | `images/New/grand format 10L5.jfif` | 175, 10, 615, 760 |

La hauteur d'affichage de chaque vignette (`--shot-h` : 200 / 325 / 400 px)
reproduit l'échelle réelle entre les formats, les trois reposant sur une ligne
de base commune.

Le 350 ml et le 1,5 L sont découpés dans la même photo de bureau : même fond
olive, même table blanche, même éclairage, et surtout le rapport de taille réel
entre les deux contenants. Les découpes font 88×262 et 110×388 pixels, donc
réduites à l'affichage et jamais agrandies. Le 10 L garde son packshot sur fond
vert flouté : c'est le seul dont on dispose.

Les découpes précédentes, issues de l'affiche Korité, ont été remplacées, ainsi
que `b2.jpg` (bouteille avec pastille ronde) et `pack-350.png`, retirés du site.

## Autres visuels fournis par la marque

| Fichier | Usage | Source |
|---|---|---|
| `bouteille-plage.jpg` | Nos formats, section « Le packaging » | `images/Bourteille plage.jpg`, recadré à partir de y=215 pour retirer le titre « La pureté à chaque instant », qui faisait doublon avec le titre de la section. Le badge « Origine Sénégal » et la signature de marque sont conservés. |

Le fichier `images/350BOUTEILLENOUV.jpg` (233×350) est la même photo que
`assets/img/geyser.jpg` (853×1280) : écart moyen de 2,2/255, soit du bruit de
compression. C'est la version haute résolution qui est utilisée sur le site.

## Visuels et vidéos du 2026-09-11

Nouveau lot fourni par la marque, rangé dans `images/New/`.

| Fichier du site | Emplacement | Source |
|---|---|---|
| `bureau-ndindi.jpg` | Accueil, grille « Moments de vie » | Bureau fille 3 bouteilles |
| `sport-duo.jpg` | Accueil, grille « Moments de vie » | Mame Diarra et cousine 1 |
| `magal-touba.jpg` | Accueil, grille « Moments de vie » | présentation modele moyen, recadré y 150–1450 pour écarter le filigrane TikTok et le bloc de contacts |
| `fraicheur-duo.jpg` | Engagement, « Santé & hydratation » | Mame Diarra et cousine |
| `format-10l-affiche.jpg` | Nos formats, section « Le 10 litres arrive » | grand format 10L5 1 |
| `logo-ndindi.jpg` | En-tête et pied de page des 7 pages | logonouveau, goutte détourée du carton officiel |

Trois vidéos ont rejoint la médiathèque, dans `assets/video/` : `tapis-roulant.mp4`
(ligne d'embouteillage), `table-mame-diarra.mp4` (poste de travail) et
`transport-ndindi.mp4` (chargement en camion). Toutes sont en format portrait,
chargées en `preload="metadata"`.

### Deux points en attente

1. **`commerciaux.jfif` n'a pas été publié.** Ce carton d'agents commerciaux porte
   des coordonnées qui contredisent celles du site : téléphone `+221 78 123 45 67`
   (qui ressemble à un numéro de remplissage), e-mail `eau.ndindi@gmail.com` et
   site `www.ndindi-eau.sn`. Le carton `logonouveau` donne encore d'autres valeurs :
   `eaundindi@gmail.com` et le second numéro `+221 78 293 77 38`, là où le site
   affiche `contact@eaundindi.com` et `+221 76 766 55 28`. À arbitrer avant de
   toucher aux pages Contact et Distribution.
2. **Le logo du site est une image aplatie** découpée dans le carton officiel.
   Un PNG transparent ou un SVG donnerait un rendu plus net, surtout sur mobile.
   Le mot-vedette « Ndindi'O » de l'en-tête reste composé en Cormorant Garamond,
   alors que le logotype officiel utilise une linéale arrondie : à harmoniser si
   la marque le souhaite.

Les vidéos sources de `images/New/Vidéos/` sont exclues du dépôt par `.gitignore` :
elles sont déjà présentes à l'identique dans `assets/video/`.

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
