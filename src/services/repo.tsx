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
    const response = await fetch(newapi);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}

export class PrivateRepo {
  static getCountry() {
    throw new Error('Method not implemented.');
  }
  privateApiUrl = 'http://localhost:3000/favorites/';

  async getCountry(filter?: string): Promise<Country[]> {
    if (!filter || filter === 'all') {
      const response = await fetch(this.privateApiUrl);
      if (!response.ok)
        throw new Error(response.status + ' ' + response.statusText);
      return response.json();
    }
    const newapi = this.privateApiUrl + `lang/${filter}`;
    const response = await fetch(newapi);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createCountry(newCountry: Partial<Country>): Promise<Country> {
    const response = await fetch(this.privateApiUrl, {
      method: 'POST',
      body: JSON.stringify(newCountry),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateCountry(
    id: Country['id'],
    updatedCountry: Partial<Country>
  ): Promise<Country> {
    const finalUrl = `${this.privateApiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedCountry),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteCountry(id: Country['id']): Promise<Country[]> {
    const finalUrl = `${this.privateApiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
