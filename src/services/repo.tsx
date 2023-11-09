import { Country } from '../model/country.types';

export class Repo {
  static getCountry() {
    throw new Error('Method not implemented.');
  }
  apiUrl = 'https://restcountries.com/v3.1/';

  async getCountry(filter?: string): Promise<Country[]> {
    if (!filter || filter === 'all') {
      const response = await fetch(this.apiUrl + 'all');
      if (!response.ok)
        throw new Error(response.status + ' ' + response.statusText);
      return response.json();
    }
    const newapi = this.apiUrl + `lang/${filter}`;
    console.log(newapi);
    const response = await fetch(newapi);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
