export class StorageService {
    constructor() {
        this.storageKey = 'geoExplorerFavorites';
    }

    getFavorites() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites(favorites) {
        localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }

    addFavorite(country) {
        const favorites = this.getFavorites();
        const favorite = {
            name: country.name.common,
            flag: country.flags.png,
            capital: country.capital?.[0] || 'N/A'
        };
        
        if (!favorites.some(fav => fav.name === country.name.common)) {
            favorites.push(favorite);
            this.saveFavorites(favorites);
        }
    }

    removeFavorite(countryName) {
        const favorites = this.getFavorites();
        const updatedFavorites = favorites.filter(fav => fav.name !== countryName);
        this.saveFavorites(updatedFavorites);
    }

    isFavorite(countryName) {
        const favorites = this.getFavorites();
        return favorites.some(fav => fav.name === countryName);
    }
}