import { ApiService } from "../services/api.js";

export class Search {
  constructor() {
    this.apiService = new ApiService();
  }

  async searchCountry(countryName) {
    return await this.apiService.fetchCountry(countryName);
  }
}
