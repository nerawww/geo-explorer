// -----------------------------affiche le nom du pays----------------------------------------------
export function displayCountryName(country) {
  document.getElementById('countryName').textContent = `Région : ${country.name.common}`;
}

// -----------------------------affiche le drapeau du pays----------------------------------------------
export function displayFlag(country) {
  document.getElementById('flagContainer').innerHTML = `<img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="100">`;
}

// -----------------------------affiche la capitale du pays----------------------------------------------
export function displayCapital(country) {
  document.getElementById('capitalContainer').textContent = `Capitale : ${country.capital[0]}`;
}

// -----------------------------affiche le continent du pays----------------------------------------------
export function displayRegion(country) {
  document.getElementById('regionContainer').textContent = `Région : ${country.region}`;
}

// -----------------------------affiche la langue du pays----------------------------------------------
export function displayLanguages(country) {
  document.getElementById('languageContainer').textContent = `Langues : ${Object.values(country.languages).join(', ')}`;
}

// -----------------------------affiche la monnaie du pays----------------------------------------------
export function displayCurrency(country) {
  const currencies = Object.values(country.currencies).map(c => `${c.name} (${c.symbol || ''})`).join(', ');
  document.getElementById('monneyContainer').textContent = `Monnaie : ${currencies}`;
}

// -----------------------------affiche la population du pays----------------------------------------------
export function displayPopulation(country) {
  document.getElementById('populationContainer').textContent = `Population : ${country.population.toLocaleString()}`;
}

// -----------------------------affiche la superficie du pays----------------------------------------------
export function displayArea(country) {
  document.getElementById('areaContainer').textContent = `Superficie : ${country.area.toLocaleString()} km²`;
}

// -----------------------------affiche la densité du pays----------------------------------------------
export function displayDensity(country) {
  const density = (country.population / country.area).toFixed(2);
  document.getElementById('densityContainer').textContent = `Densité : ${density} hab/km²`;
}

// -----------------------------affiche la carte du pays----------------------------------------------
export function displayMap(country) {
  const [lat, lng] = country.latlng;
  const bboxLngDelta = 5, bboxLatDelta = 3;
  document.getElementById('infoContentRight').innerHTML = 
    `<iframe width="800" height="700" src="https://www.openstreetmap.org/export/embed.html?bbox=${lng-bboxLngDelta}%2C${lat-bboxLatDelta}%2C${lng+bboxLngDelta}%2C${lat+bboxLatDelta}&layer=mapnik&marker=${lat}%2C${lng}"></iframe>`;
}



