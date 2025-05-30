import { getCountryByName } from "./services/api.js";
import {
  displayFlag,
  displayCapital,
  displayRegion,
  displayLanguages,
  displayCurrency,
  displayPopulation,
  displayArea,
  displayDensity,
  displayMap,
  displayCountryName,
} from "./components/CountryDetail.js";
import { setupCountryAutocomplete } from "./components/Search.js";
import {
  addFavorite,
  removeFavorite,
  renderFavorites,
  isFavorite,
} from "./components/Favorites.js";

let lastCountry = null;

document
  .getElementById("searchBtn")
  .addEventListener("click", displayCountryInfo);

async function displayCountryInfo() {
  const name = document.getElementById("countryInput").value.trim();
  if (!name) return;

  try {
    const data = await getCountryByName(name);
    const country = data[0];
    lastCountry = country;

    displayCountryName(country);
    displayFlag(country);
    displayCapital(country);
    displayRegion(country);
    displayLanguages(country);
    displayCurrency(country);
    displayPopulation(country);
    displayArea(country);
    displayDensity(country);
    displayMap(country);

    updateFavBtn();
  } catch (e) {
    lastCountry = null;
    displayCountryName(null);
    displayFlag(null);
    displayCapital(null);
    displayRegion(null);
    displayLanguages(null);
    displayCurrency(null);
    displayPopulation(null);
    displayArea(null);
    displayDensity(null);
    displayMap(null);
    updateFavBtn();
  }
}

function updateFavBtn() {
  const favBtn = document.getElementById("favBtn");
  if (!lastCountry) {
    favBtn.textContent = "Ajouter aux Favoris";
    favBtn.disabled = true;
    return;
  }
  favBtn.disabled = false;
  if (isFavorite(lastCountry)) {
    favBtn.textContent = "Supprimer des Favoris";
  } else {
    favBtn.textContent = "Ajouter aux Favoris";
  }
}

setupCountryAutocomplete();
renderFavorites();
updateFavBtn();

document.getElementById("favBtn").addEventListener("click", () => {
  if (!lastCountry) return;
  if (isFavorite(lastCountry)) {
    removeFavorite(lastCountry);
  } else {
    addFavorite(lastCountry);
  }
  updateFavBtn();
});
