"""Genere assets/img/hero-formats.jpg, le bandeau de la page Nos formats.

Assemble les trois packshots detoures sur un fond degrade, alignes sur une
ligne de base commune et a l'echelle reelle entre les contenants. La moitie
gauche reste vide pour accueillir le titre de la page.

Lancer depuis la racine du site :
    python outils/compo-hero-formats.py
"""
import os
from PIL import Image, ImageDraw, ImageFilter

W, H = 1920, 640          # rapport 3,0
BASELINE = 600            # sol commun aux trois contenants

# Le bandeau fait environ 1265x655 px, soit un rapport de 1,93. En cover,
# c'est la largeur qui est rognee : seule la bande x 328-1592 reste visible.
# Le groupe de bouteilles tient donc entre 1037 et 1520.
PLAN = [
    # (fichier, hauteur affichee, bord droit)  -- 235/382/470 reprend 200/325/400
    ('assets/img/produit-350.png', 235, 1111),
    ('assets/img/produit-15l.png', 382, 1275),
    ('assets/img/produit-10l.png', 470, 1520),
]


def fond():
    """Degrade doux entre quatre coins, plus un halo lumineux derriere le groupe."""
    seed = Image.new('RGB', (2, 2))
    seed.putpixel((0, 0), (228, 243, 252))
    seed.putpixel((1, 0), (186, 227, 247))
    seed.putpixel((0, 1), (142, 201, 232))
    seed.putpixel((1, 1), (84, 175, 224))
    base = seed.resize((W, H), Image.BICUBIC)

    glow = Image.radial_gradient('L').resize((1500, 1500), Image.BICUBIC)
    glow = Image.eval(glow, lambda v: 255 - v)      # blanc au centre
    halo = Image.new('L', (W, H), 0)
    halo.paste(glow, (1270 - 750, 340 - 750))
    halo = Image.eval(halo, lambda v: int(v * 0.60))
    return Image.composite(Image.new('RGB', (W, H), (255, 255, 255)), base, halo)


def main():
    base = fond()

    ombres = Image.new('L', (W, H), 0)
    dessin = ImageDraw.Draw(ombres)
    posees = []
    for chemin, hauteur, droite in PLAN:
        im = Image.open(chemin).convert('RGBA')
        largeur = round(im.size[0] * hauteur / im.size[1])
        im = im.resize((largeur, hauteur), Image.LANCZOS)
        x = droite - largeur
        posees.append((im, x, BASELINE - hauteur))
        dessin.ellipse([x - largeur * .18, BASELINE - hauteur * .028,
                        x + largeur * 1.18, BASELINE + hauteur * .055], fill=132)

    ombres = ombres.filter(ImageFilter.GaussianBlur(16))
    base = Image.composite(Image.new('RGB', (W, H), (24, 78, 116)), base, ombres)

    for im, x, y in posees:
        base.paste(im, (x, y), im)

    sortie = 'assets/img/hero-formats.jpg'
    base.save(sortie, quality=88, optimize=True, progressive=True)
    print(sortie, base.size, os.path.getsize(sortie) // 1024, 'ko')


if __name__ == '__main__':
    main()
