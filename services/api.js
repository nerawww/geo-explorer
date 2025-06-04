export class ApiService {
  constructor() {
    this.baseURL = "https://restcountries.com/v3.1";
    this.allCountries = null; // Cache pour éviter de refetch
  }

  async fetchAllCountries() {
    if (!this.allCountries) {
      const response = await fetch(
        `${this.baseURL}/all?fields=name,capital,flags,region,population,area,latlng,languages,currencies`
      );
      this.allCountries = await response.json();
    }
    return this.allCountries;
  }

  async fetchCountry(query) {
    const countries = await this.fetchAllCountries();
    const searchQuery = query.toLowerCase().trim();

    // Recherche par nom de pays
    let country = countries.find(
      (c) =>
        c.name.common.toLowerCase().includes(searchQuery) ||
        c.name.official.toLowerCase().includes(searchQuery)
    );

    // Si pas trouvé, recherche par capitale
    if (!country) {
      country = countries.find(
        (c) =>
          c.capital &&
          c.capital.some((cap) => cap.toLowerCase().includes(searchQuery))
      );
    }

    if (!country) {
      throw new Error("Country not found");
    }

    return country;
  }
}
