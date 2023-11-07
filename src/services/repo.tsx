import { Country } from '../model/country.types';

export class Repo {
  apiUrl = 'https://restcountries.com/v3.1/all';

  async getCountry(): Promise<Country[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
