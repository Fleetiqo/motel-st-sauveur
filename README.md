# Motel des Pentes et Suites - Saint-Sauveur

Site web moderne pour le Motel des Pentes et Suites à Saint-Sauveur, Québec.

## 🚀 Déploiement sur GitHub Pages

### Option 1: Déploiement automatique avec GitHub Actions

1. Poussez le code sur GitHub
2. Allez dans Settings > Pages
3. Sélectionnez "GitHub Actions" comme source
4. Le site sera automatiquement déployé à chaque push

### Option 2: Déploiement manuel du dossier dist

1. Construisez le projet:
```bash
npm run build
```

2. Poussez le dossier `dist` sur la branche `gh-pages`:
```bash
git subtree push --prefix dist origin gh-pages
```

3. Allez dans Settings > Pages et sélectionnez la branche `gh-pages`

## 🛠️ Développement local

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
```

Le site sera généré dans le dossier `dist/`.

## 🌐 Technologies

- Vite
- Vanilla JavaScript
- CSS3 avec animations
- Responsive design
- Google Fonts (Montserrat, Playfair Display)

## 📞 Contact

- Téléphone: 450-227-5351 / 1-855-727-5351
- Email: info@motelstsauveur.com
- Adresse: 1074 Rue de la Gare, Saint-Sauveur, QC J0R 1R4
