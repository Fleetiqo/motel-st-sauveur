# 🚀 Quick Start - Déploiement en 5 minutes

## Méthode Rapide (Recommandée)

### 1. Créer le repository GitHub
```bash
# Dans le dossier motel-st-sauveur
git init
git add .
git commit -m "Initial commit - Motel des Pentes website"
```

### 2. Créer le repository sur GitHub
- Allez sur https://github.com/new
- Nom: `motel-st-sauveur`
- Public
- Cliquez "Create repository"

### 3. Pousser le code
```bash
git remote add origin https://github.com/VOTRE-USERNAME/motel-st-sauveur.git
git branch -M main
git push -u origin main
```

### 4. Activer GitHub Pages
1. Settings > Pages
2. Source: **GitHub Actions**
3. Attendez 2-3 minutes

### 5. Votre site est en ligne! 🎉
```
https://VOTRE-USERNAME.github.io/motel-st-sauveur/
```

## Tester localement d'abord

```bash
npm install
npm run dev
```

Ouvrez http://localhost:5173

## Mettre à jour le site

```bash
git add .
git commit -m "Mise à jour"
git push
```

C'est tout! Le site se redéploie automatiquement.

---

Pour plus de détails, voir [DEPLOYMENT.md](DEPLOYMENT.md)
