import { StorageService } from "../services/storage.js";

export class Favorites {
  constructor() {
    this.storageService = new StorageService();
  }

  loadFavorites() {
    this.updateFavoritesList();
  }

  addFavorite(country) {
    this.storageService.addFavorite(country);
    this.updateFavoritesList();
  }

  removeFavorite(countryName) {
    this.storageService.removeFavorite(countryName);
    this.updateFavoritesList();
  }

  isFavorite(countryName) {
    return this.storageService.isFavorite(countryName);
  }

  updateFavoriteButton(country) {
    setTimeout(() => {
      const favoriteBtn = document.getElementById("add-favorite");
      if (favoriteBtn) {
        const isFav = this.isFavorite(country.name.common);

        favoriteBtn.textContent = isFav ? "❤️" : "🤍";
        favoriteBtn.className = isFav
          ? "favorite-btn-top active"
          : "favorite-btn-top";

        favoriteBtn.onclick = () => {
          if (this.isFavorite(country.name.common)) {
            this.removeFavorite(country.name.common);
          } else {
            this.addFavorite(country);
          }
          this.updateFavoriteButton(country);
        };
      }
    }, 100);
  }

  updateFavoritesList() {
    const favoritesList = document.querySelector(".favorites-list");
    const favorites = this.storageService.getFavorites();

    if (favorites.length === 0) {
      favoritesList.innerHTML =
        '<p class="no-favorites">No favorites saved</p>';
    } else {
      favoritesList.innerHTML = favorites
        .map(
          (fav) => `
        <div class="favorite-item" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; padding: 0.5rem; border-radius: 5px; background: #f8f9fa; cursor: pointer;">
          <img src="${fav.flag}" alt="${fav.name}" style="width: 20px;">
          <span style="flex-grow: 1;">${fav.name}</span>
          <button onclick="event.stopPropagation(); window.favoritesInstance.removeFavorite('${fav.name}')" style="background: #e74c3c; color: white; border: none; border-radius: 3px; padding: 2px 6px; cursor: pointer;">✕</button>
        </div>
      `
        )
        .join("");

      document.querySelectorAll(".favorite-item").forEach((item, index) => {
        item.addEventListener("click", () => {
          this.searchFavoriteCountry(favorites[index].name);
        });
      });
    }
  }

  async searchFavoriteCountry(countryName) {
    document.getElementById("search-input").value = countryName;
    document.getElementById("search-btn").click();
    this.toggleDropdown();
  }

  toggleDropdown() {
    document.getElementById("favorites-dropdown").classList.toggle("hidden");
  }
}

window.favoritesInstance = new Favorites();
