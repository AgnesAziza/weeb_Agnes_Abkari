# Rapport du projet Weeb — Semaine 1

## 1. Contexte du projet

Le projet consiste à développer les premières interfaces du site internet de l'entreprise Weeb. La première semaine se focalise sur la partie **vitrine**, avec les pages : Home, Contact et Login.

**Objectifs :**
- Créer les pages statiques avec React
- Mettre en place un routage interne avec React Router
- Structurer le projet pour faciliter les futures extensions

## 2. Architecture du projet

L'arborescence choisie est la suivante :

```
weeb_Agnes_Abkari/
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  └─ Footer.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Contact.jsx
│  │  └─ Login.jsx
│  ├─ AppRoutes.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
└─ README.md
```

**Explications :**
- `components/` contient les éléments réutilisables (Header et Footer)
- `pages/` contient les pages principales (Home, Contact, Login)
- `AppRoutes.jsx` gère le routage interne
- `main.jsx` est le point d'entrée du projet

## 3. Choix techniques

- **React** : construction des interfaces et composants réutilisables
- **React Router** : navigation interne sans rechargement
- **Arrow functions** pour tous les composants, avec export à la fin

## 4. Fonctionnement de l'application

1. L'utilisateur arrive sur la page `/` qui affiche le composant `Home`
2. Le Header contient des liens `NavLink` vers Home, Contact et Login
3. Cliquer sur un lien change le composant affiché dans `main` sans recharger la page
4. Le Footer reste visible sur toutes les pages

## 5. Prise en main du code

### Cloner le repository

```bash
git clone git@github.com:AgnesAziza/weeb_Agnes_Abkari.git
```

### Installer les dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

### Structure des fichiers

- **Header.jsx** et **Footer.jsx** : composants présents sur toutes les pages
- **Home.jsx**, **Contact.jsx**, **Login.jsx** : pages principales
- **AppRoutes.jsx** : routage interne
- **main.jsx** : point d'entrée avec BrowserRouter
