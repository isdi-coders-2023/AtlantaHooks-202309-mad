import { Country } from '../model/country.types';

const apiUrl = 'https://restcountries.com/v3.1/all';

export const getCountries = async (): Promise<Country[]> => {
  const response = await fetch(apiUrl);
  if (!response.ok)
    throw new Error(response.status + ' ' + response.statusText);
  return response.json();
};

