import { Country } from '../model/country.types';

export class Repo {
  static getCountry() {
    throw new Error('Method not implemented.');

  }
  apiUrl = 'https://restcountries.com/v3.1/';
  
  async getCountry(filter?: string): Promise<Country[]> {
    if (!filter) {
    const response = await fetch(this.apiUrl + 'all');
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
    const response = await fetch(`this.apiUrl${filter}` );
    if (!response.ok)
    throw new Error(response.status + ' ' + response.statusText);
    return response.json();
}

}
