export class CountryDetails {
  displayCountry(country) {
    this.hideWelcome();
    this.showCountryInfo(country);
    this.showMap(country);
  }

  hideWelcome() {
    document.querySelector(".welcome-message").classList.add("hidden");
  }

  showCountryInfo(country) {
    const countryInfo = document.getElementById("country-info");
    const density = this.calculateDensity(country.population, country.area);

    countryInfo.innerHTML = `
      <button id="add-favorite" class="favorite-btn-top">🤍</button>
      
      <div class="country-header">
        <img src="${country.flags.png}" alt="Flag of ${
      country.name.common
    }" class="country-flag">
        <h2 class="country-name">${country.name.common}</h2>
      </div>
      
      <div class="country-data">
        <div class="data-item">
          <div class="data-label">Capital</div>
          <div class="data-value">${country.capital?.[0] || "N/A"}</div>
        </div>
        <div class="data-item">
          <div class="data-label">Region</div>
          <div class="data-value">${country.region}</div>
        </div>
        <div class="data-item">
          <div class="data-label">Population</div>
          <div class="data-value">${country.population.toLocaleString()}</div>
        </div>
        <div class="data-item">
          <div class="data-label">Area</div>
          <div class="data-value">${
            country.area?.toLocaleString() || "N/A"
          } km²</div>
        </div>
        <div class="data-item">
          <div class="data-label">Density</div>
          <div class="data-value">${density} per km²</div>
        </div>
        <div class="data-item">
          <div class="data-label">Languages</div>
          <div class="data-value">${this.getLanguages(country.languages)}</div>
        </div>
        <div class="data-item">
          <div class="data-label">Currencies</div>
          <div class="data-value">${this.getCurrencies(
            country.currencies
          )}</div>
        </div>
      </div>
    `;

    countryInfo.classList.remove("hidden");
  }

  showMap(country) {
    const mapPlaceholder = document.querySelector(".map-placeholder");
    const countryMap = document.getElementById("country-map");
    const lat = country.latlng?.[0] || 0;
    const lng = country.latlng?.[1] || 0;

    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
      lng - 2
    },${lat - 2},${lng + 2},${lat + 2}&layer=mapnik&marker=${lat},${lng}`;

    countryMap.innerHTML = `<iframe src="${mapUrl}" width="100%" height="100%" allowfullscreen loading="lazy"></iframe>`;

    mapPlaceholder.classList.add("hidden");
    countryMap.classList.remove("hidden");
  }

  calculateDensity(population, area) {
    return !area || area === 0 ? "N/A" : Math.round(population / area);
  }

  getLanguages(languages) {
    return languages ? Object.values(languages).join(", ") : "N/A";
  }

  getCurrencies(currencies) {
    return currencies
      ? Object.values(currencies)
          .map((currency) => currency.name)
          .join(", ")
      : "N/A";
  }
}
