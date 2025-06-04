import { Search } from "./components/Search.js";
import { CountryDetails } from "./components/CountryDetails.js";
import { Favorites } from "./components/Favorites.js";

class GeoExplorer {
  constructor() {
    this.search = new Search();
    this.countryDetails = new CountryDetails();
    this.favorites = new Favorites();
    this.init();
  }

  init() {
    this.bindEvents();
    this.favorites.loadFavorites();
  }

  bindEvents() {
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const homeLink = document.getElementById("home-link");
    const favoritesBtn = document.getElementById("favorites-btn");

    searchBtn.addEventListener("click", () => this.handleSearch());
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleSearch();
    });
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      this.showWelcome();
    });
    favoritesBtn.addEventListener("click", () => {
      this.favorites.toggleDropdown();
    });
  }

  async handleSearch() {
    const countryName = document.getElementById("search-input").value.trim();
    if (!countryName) return;

    try {
      const countryData = await this.search.searchCountry(countryName);
      this.countryDetails.displayCountry(countryData);
      this.favorites.updateFavoriteButton(countryData);
    } catch (error) {
      alert("Country or capital not found. Please check the spelling.");
    }
  }

  showWelcome() {
    document.querySelector(".welcome-message").classList.remove("hidden");
    document.getElementById("country-info").classList.add("hidden");
    document.querySelector(".map-placeholder").classList.remove("hidden");
    document.getElementById("country-map").classList.add("hidden");
    document.getElementById("search-input").value = "";
  }
}

new GeoExplorer();
