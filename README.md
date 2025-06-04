# 🌍 Geo Explorer

Une application web interactive pour explorer les pays du monde entier avec des informations géographiques détaillées et des cartes interactives.

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [API utilisée](#api-utilisée)
- [Contribution](#contribution)
- [Licence](#licence)

## 🎯 Aperçu

Geo Explorer est une application web moderne qui permet aux utilisateurs de découvrir des informations détaillées sur n'importe quel pays du monde. L'application utilise l'API REST Countries pour fournir des données en temps réel et OpenStreetMap pour les cartes interactives.

### Capture d'écran

![Geo Explorer Interface](screenshot.png)

## ✨ Fonctionnalités

### 🔍 Recherche avancée

- **Recherche par nom de pays** : Trouvez n'importe quel pays par son nom commun ou officiel
- **Recherche par capitale** : Recherchez un pays en tapant le nom de sa capitale
- **Recherche intelligente** : Correspondances partielles et suggestions automatiques

### 📊 Informations détaillées

- **Données géographiques** : Population, superficie, densité
- **Informations politiques** : Capitale, région, sous-région
- **Culture et société** : Langues officielles, monnaies
- **Drapeaux** : Affichage haute qualité des drapeaux nationaux

### 🗺️ Cartes interactives

- **Localisation précise** : Cartes centrées sur chaque pays
- **Interface responsive** : Cartes adaptatives à tous les écrans
- **Zoom et navigation** : Exploration détaillée possible

### ⭐ Système de favoris

- **Sauvegarde locale** : Vos pays favoris sont conservés dans le navigateur
- **Accès rapide** : Menu déroulant pour retrouver vos favoris
- **Gestion simple** : Ajout/suppression en un clic

## 🛠️ Technologies utilisées

### Frontend

- **HTML5** : Structure sémantique moderne
- **CSS3** : Styles avancés avec Grid et Flexbox
- **JavaScript ES6+** : Modules, classes, async/await
- **Architecture modulaire** : Séparation des responsabilités

### APIs externes

- **[REST Countries API](https://restcountries.com/)** : Données des pays
- **[OpenStreetMap](https://www.openstreetmap.org/)** : Cartes interactives

### Fonctionnalités modernes

- **Responsive Design** : Compatible mobile et desktop
- **Progressive Enhancement** : Fonctionnalité dégradée gracieuse
- **Local Storage** : Persistance des données côté client

## 🚀 Installation

### Prérequis

- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local (optionnel pour le développement)

### Installation simple

1. **Clonez le repository**

   ```bash
   git clone https://github.com/votre-username/geo-explorer.git
   cd geo-explorer
   ```

2. **Lancez l'application**

   - Ouvrez `index.html` dans votre navigateur, ou
   - Utilisez un serveur local :

   ```bash
   # Avec Python 3
   python -m http.server 8000

   # Avec Node.js (npx)
   npx serve .

   # Avec PHP
   php -S localhost:8000
   ```

3. **Accédez à l'application**
   - Fichier local : `file://chemin/vers/index.html`
   - Serveur local : `http://localhost:8000`

## 📖 Utilisation

### Recherche de base

1. **Tapez un nom de pays** dans la barre de recherche
   - Exemple : "France", "Germany", "Japan"
2. **Ou tapez une capitale**
   - Exemple : "Paris", "Berlin", "Tokyo"
3. **Appuyez sur Entrée** ou cliquez sur 🔍

### Gestion des favoris

1. **Ajouter aux favoris** : Cliquez sur 🤍 en haut à droite des détails du pays
2. **Voir les favoris** : Cliquez sur "🤍 Favorites" dans le header
3. **Supprimer un favori** : Cliquez sur ✕ dans la liste des favoris

### Navigation

- **Retour à l'accueil** : Cliquez sur le titre "🌍 Geo Explorer"
- **Nouvelle recherche** : Effacez la barre de recherche et tapez un nouveau terme

## 📁 Structure du projet

```
geo-explorer/
├── 📄 index.html              # Page principale
├── 🎨 style.css               # Styles CSS
├── ⚙️ main.js                 # Point d'entrée JavaScript
├── 📁 components/             # Composants modulaires
│   ├── Search.js              # Gestion de la recherche
│   ├── CountryDetails.js      # Affichage des détails pays
│   └── Favorites.js           # Système de favoris
├── 📁 services/               # Services externes
│   ├── api.js                 # Interface API REST Countries
│   └── storage.js             # Gestion du localStorage
└── 📄 README.md               # Documentation
```

### Architecture modulaire

#### **Composants** (`components/`)

- **Search.js** : Gère la logique de recherche et les appels API
- **CountryDetails.js** : Responsable de l'affichage des informations pays
- **Favorites.js** : Gère le système de favoris et le localStorage

#### **Services** (`services/`)

- **api.js** : Interface avec l'API REST Countries, gestion du cache
- **storage.js** : Abstraction du localStorage pour les favoris

## 🌐 API utilisée

### REST Countries API

- **URL** : `https://restcountries.com/v3.1/`
- **Documentation** : [restcountries.com](https://restcountries.com/)
- **Endpoints utilisés** :
  - `/all` : Récupération de tous les pays (avec cache)
  - Recherche locale dans les données mises en cache

### Données récupérées

```javascript
{
  name: { common: "France", official: "République française" },
  capital: ["Paris"],
  flags: { png: "url-du-drapeau.png" },
  region: "Europe",
  population: 67391582,
  area: 643801,
  latlng: [46.0, 2.0],
  languages: { fra: "French" },
  currencies: { EUR: { name: "Euro" } }
}
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

### Étapes pour contribuer

1. **Fork** le projet
2. **Créez** une branche pour votre fonctionnalité
   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   ```
3. **Commitez** vos changements
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. **Push** vers la branche
   ```bash
   git push origin feature/nouvelle-fonctionnalite
   ```
5. **Ouvrez** une Pull Request

### Guidelines de développement

- Respectez l'architecture modulaire existante
- Commentez votre code pour les fonctionnalités complexes
- Testez sur différents navigateurs
- Maintenez la compatibilité responsive

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- **[REST Countries API](https://restcountries.com/)** pour les données des pays
- **[OpenStreetMap](https://www.openstreetmap.org/)** pour les cartes
- **Communauté open source** pour l'inspiration et les outils

---

**Développé avec ❤️ par [Votre Nom]**

Pour toute question ou suggestion, n'hésitez pas à ouvrir une [issue](https://github.com/votre-username/geo-explorer/issues) !
