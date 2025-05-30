import { getCountryByName } from './services/api.js';
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
  displayCountryName 
} from './components/CountryDetail.js';
import { setupCountryAutocomplete } from './components/Search.js';
import { addFavorite, removeFavorite, renderFavorites, isFavorite } from './components/Favorites.js';

let lastCountry = null;
let validCountryNames = [];

async function fetchCountryNames() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  validCountryNames = data.map(c => c.name.common.toLowerCase());
}
fetchCountryNames();

document.getElementById('searchBtn').addEventListener('click', displayCountryInfo);

async function displayCountryInfo() {
  const name = document.getElementById('countryInput').value.trim();
  if (!name) return;

// compare les pays avec une liste de noms valides
  const isValidCountry = validCountryNames.includes(name.toLowerCase());
  if (!isValidCountry) {
    lastCountry = null;
    clearCountryDetails();
    updateFavBtn();
    return;
  }

  try {
    const data = await getCountryByName(name);
    const country = data.find(c => c.name.common.toLowerCase() === name.toLowerCase());
    if (!country) throw new Error('Country not found');
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
    clearCountryDetails();
    updateFavBtn();
  }
}

function clearCountryDetails() {
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
}

function updateFavBtn() {
  const favBtn = document.getElementById('favBtn');
  if (!lastCountry) {
    favBtn.textContent = 'ajouter au favoris';
    favBtn.disabled = true;
    return;
  }
  favBtn.disabled = false;
  if (isFavorite(lastCountry)) {
    favBtn.textContent = 'supprimer des favoris';
  } else {
    favBtn.textContent = 'ajouter au favoris';
  }
}

setupCountryAutocomplete();
renderFavorites();
updateFavBtn();

document.getElementById('favBtn').addEventListener('click', () => {
  if (!lastCountry) return;
  if (isFavorite(lastCountry)) {
    removeFavorite(lastCountry);
  } else {
    addFavorite(lastCountry);
  }
  updateFavBtn();
});

