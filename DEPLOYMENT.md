# Guide de Déploiement GitHub Pages

## 📋 Prérequis

- Compte GitHub
- Git installé localement
- Node.js et npm installés

## 🚀 Étapes de Déploiement

### 1. Créer un nouveau repository sur GitHub

1. Allez sur https://github.com/new
2. Nommez votre repository (ex: `motel-st-sauveur`)
3. Choisissez Public ou Private
4. Ne cochez PAS "Initialize with README"
5. Cliquez sur "Create repository"

### 2. Initialiser Git et pousser le code

```bash
cd motel-st-sauveur
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/motel-st-sauveur.git
git push -u origin main
```

### 3. Configurer GitHub Pages

1. Allez dans votre repository sur GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Build and deployment":
   - Source: Sélectionnez **GitHub Actions**
5. Le workflow se lancera automatiquement

### 4. Vérifier le déploiement

1. Allez dans l'onglet **Actions** de votre repository
2. Vous verrez le workflow "Deploy to GitHub Pages" en cours
3. Une fois terminé (✓ vert), votre site sera disponible à:
   ```
   https://VOTRE-USERNAME.github.io/motel-st-sauveur/
   ```

## 🔄 Mises à jour

Pour mettre à jour le site:

```bash
# Faites vos modifications
git add .
git commit -m "Description des changements"
git push
```

Le site sera automatiquement redéployé!

## 🌐 Domaine personnalisé (Optionnel)

Pour utiliser votre propre domaine (ex: www.motelstsauveur.com):

1. Dans Settings > Pages, ajoutez votre domaine dans "Custom domain"
2. Créez un fichier `CNAME` à la racine avec votre domaine:
   ```
   www.motelstsauveur.com
   ```
3. Configurez vos DNS:
   - Type A vers les IPs GitHub:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Type CNAME: www vers VOTRE-USERNAME.github.io

## 🛠️ Développement Local

```bash
npm install
npm run dev
```

Le site sera disponible sur http://localhost:5173

## 📦 Build Manuel

```bash
npm run build
```

Les fichiers seront générés dans `dist/`

## ❓ Dépannage

### Le site ne s'affiche pas correctement

1. Vérifiez que le workflow Actions s'est terminé avec succès
2. Attendez 2-3 minutes après le déploiement
3. Videz le cache de votre navigateur (Ctrl+Shift+R)

### Erreur 404

1. Vérifiez que `base: './'` est dans `vite.config.js`
2. Vérifiez que le fichier `.nojekyll` existe dans `dist/`
3. Reconstruisez: `npm run build`

### Les images ne s'affichent pas

Les images sont hébergées sur motelstsauveur.com et chargées via URL.
Si le site original change, les images pourraient ne plus fonctionner.

## 📞 Support

Pour toute question, contactez:
- Email: info@motelstsauveur.com
- Téléphone: 450-227-5351
