# Ikaze Burundi — Tourisme au Cœur de l'Afrique

Site vitrine touristique mettant en valeur le Burundi, ses paysages, sa culture et son patrimoine.

> **Ikaze** signifie « Bienvenue » en Kirundi.

## Apercu

Un site one-page moderne avec des animations fluides, un scroll parallaxe et une typographie soignée. Le site présente les destinations incontournables du Burundi : le Lac Tanganyika, le Mont Heha, les Chutes de Karera, la Source du Nil et la Plage de Saga, ainsi que la richesse culturelle du pays (Tambourinaires, Danse Intore, Artisanat).

## Tech Stack

| Categorie     | Technologie                  |
| ------------- | ---------------------------- |
| Framework     | Next.js 16 (App Router)      |
| UI            | React 19                     |
| Langage       | TypeScript                   |
| Styling       | Tailwind CSS v4              |
| Animations    | GSAP + ScrollTrigger         |
| Scroll fluide | Lenis                        |
| Police        | Cormorant Garamond (serif)   |

## Structure

```
src/
├── app/
│   ├── layout.tsx           # Layout racine, metadata, fonts
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux + Tailwind
│
└── components/
    ├── Navbar.tsx            # Navigation fixe
    ├── Hero.tsx              # Section hero avec parallaxe
    ├── ProjectsSection.tsx   # Destinations du Burundi
    ├── PhilosophySection.tsx # Culture & patrimoine
    ├── ContactSection.tsx    # Contact / office du tourisme
    ├── Footer.tsx            # Pied de page
    ├── CustomCursor.tsx      # Curseur personnalisé
    ├── SmoothScroll.tsx      # Wrapper Lenis
    ├── ParallaxImage.tsx     # Images avec effet parallaxe
    └── ScrollRevealText.tsx  # Texte révélé au scroll
```

## Installation

```bash
# Cloner le repo
git clone https://github.com/Bazagod/Touristique-website.git
cd Touristique-website

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande        | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Serveur de développement (Turbopack) |
| `npm run build` | Build de production                |
| `npm run start` | Serveur de production              |
| `npm run lint`  | Linter ESLint                      |

## Sections du site

- **Hero** — Introduction visuelle plein écran avec animation de parallaxe
- **Destinations** — Lac Tanganyika, Mont Heha, Chutes de Karera, Source du Nil, Plage de Saga
- **Culture & Patrimoine** — Tambourinaires, Danse Intore, Artisanat burundais
- **Contact** — Office du tourisme et réservations

## Auteur

Conçu et développé par **[Bazagod](https://github.com/bazagod)**.

## Licence

Tous droits réservés. Toute reproduction ou copie non autorisée est strictement interdite.
