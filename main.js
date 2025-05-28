import { getCountryByName } from './services/api.js';


document.getElementById('searchBtn').addEventListener('click', displayCountryInfo);



async function displayCountryInfo() {
  const name = document.getElementById('countryInput').value.trim();
  if (!name) return;

  try {
    const data = await getCountryByName(name);
    const country = data[0];

    displayFlag(country);
    displayCapital(country);
    displayRegion(country);
    displayLanguages(country);
    displayCurrency(country);
    displayPopulation(country);
    displayArea(country);
    displayDensity(country);
  } catch (e) {
    displayFlag(null);
    displayCapital(null);
    displayRegion(null);
    displayLanguages(null);
    displayCurrency(null);
    displayPopulation(null);
    displayArea(null);
    displayDensity(null);
  }
}

function displayFlag(country) {
  const flagContainer = document.getElementById('flagContainer');
  flagContainer.innerHTML = '';
  if (country && country.flags?.svg) {
    const alt = country.name?.common || 'drapeau';
    flagContainer.innerHTML = `<img src="${country.flags.svg}" alt="Flag of ${alt}" width="200">`;
  } else {
    flagContainer.textContent = country ? 'drapeau non trouvé' : 'pays non trouvé';
  }
}

function displayCapital(country) {
  const capitalContainer = document.getElementById('capitalContainer');
  capitalContainer.innerHTML = '';
  if (country && country.capital?.[0]) {
    capitalContainer.textContent = `Capitale : ${country.capital[0]}`;
  } else {
    capitalContainer.textContent = country ? 'capitale non trouvée' : '';
  }
}

function displayRegion(country) {
  const regionContainer = document.getElementById('regionContainer');
  regionContainer.innerHTML = '';
  if (country && country.region) {
    regionContainer.textContent = `Région : ${country.region}`;
  } else {
    regionContainer.textContent = country ? 'région non trouvée' : '';
  }
}

function displayLanguages(country) {
  const languageContainer = document.getElementById('languageContainer');
  languageContainer.innerHTML = '';
  if (country && country.languages) {
    const langs = Object.values(country.languages).join(', ');
    languageContainer.textContent = `Langues : ${langs}`;
  } else {
    languageContainer.textContent = country ? 'langues non trouvées' : '';
  }
}

function displayCurrency(country) {
  const monneyContainer = document.getElementById('monneyContainer');
  monneyContainer.innerHTML = '';
  if (country && country.currencies) {
    const currencies = Object.values(country.currencies)
      .map(c => `${c.name} (${c.symbol || ''})`).join(', ');
    monneyContainer.textContent = `Monnaie : ${currencies}`;
  } else {
    monneyContainer.textContent = country ? 'monnaie non trouvée' : '';
  }
}

function displayPopulation(country) {
  const populationContainer = document.getElementById('populationContainer');
  populationContainer.innerHTML = '';
  if (country && country.population) {
    populationContainer.textContent = `Population : ${country.population.toLocaleString()}`;
  } else {
    populationContainer.textContent = country ? 'population non trouvée' : '';
  }
}

function displayArea(country) {
  const areaContainer = document.getElementById('areaContainer');
  areaContainer.innerHTML = '';
  if (country && country.area) {
    areaContainer.textContent = `Superficie : ${country.area.toLocaleString()} km²`;
  } else {
    areaContainer.textContent = country ? 'superficie non trouvée' : '';
  }
}

function displayDensity(country) {
    const densityContainer = document.getElementById('densityContainer');
    densityContainer.innerHTML = '';
    if (country && country.population && country.area) {
      const density = (country.population / country.area).toFixed(2);
      densityContainer.textContent = `Densité : ${density} hab/km²`;
    } else {
      densityContainer.textContent = country ? 'densité non trouvée' : '';
    }
  }

  function displayMap(country) {
    const densityContainer = document.getElementById('densityContainer');
    densityContainer.innerHTML = '';
    if (country && country.population && country.area) {
      const density = (country.population / country.area).toFixed(2);
      densityContainer.textContent = `Densité : ${density} hab/km²`;
    } else {
      densityContainer.textContent = country ? 'densité non trouvée' : '';
    }
  }

  let countryNames = [];

async function fetchAllCountryNames() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  countryNames = data.map(c => c.name.common).sort();
}
fetchAllCountryNames()

const input = document.getElementById('countryInput');
const suggestionBox = document.createElement('ul');
suggestionBox.style.position = 'absolute';
suggestionBox.style.background = '#fff';
suggestionBox.style.color = '#000';

suggestionBox.style.margin = '0';
suggestionBox.style.padding = '0';
suggestionBox.style.listStyle = 'none';


input.parentNode.appendChild(suggestionBox);

input.addEventListener('input', function() {
  suggestionBox.style.top = (input.offsetTop + input.offsetHeight) + 'px';

  const value = input.value.trim().toLowerCase();
  suggestionBox.innerHTML = '';
  if (!value) return;
  const matches = countryNames.filter(name => name.toLowerCase().startsWith(value));
  matches.slice(0, 5).forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    li.style.padding = '0.5rem';
    li.style.borderBottom = '1px solid #eee';
    li.style.color = '#000'; 
    li.addEventListener('mousedown', function(e) {
      e.preventDefault();
      input.value = name;
      suggestionBox.innerHTML = '';
    });
    suggestionBox.appendChild(li);
  });
});
