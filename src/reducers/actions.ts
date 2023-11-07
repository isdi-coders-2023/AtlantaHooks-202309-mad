import { Country } from '../model/country.types';

export type ActionCountryTypes = 'load' | 'unknown';

type ActionCountryAll = {
  type: 'load' | 'unknown';
  payload: Country[];
};

export type ActionCountry = ActionCountryAll;

export const loadActionCreator = (payload: Country[]): ActionCountry => ({
  type: 'load',
  payload,
});
