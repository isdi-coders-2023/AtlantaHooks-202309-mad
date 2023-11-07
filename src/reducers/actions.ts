import { Country } from '../model/country.types';

export type ActionCountryTypes = 'load';

type ActionCountryAll = {
  type: 'load';
  payload: Country[];
};

export type ActionCountry = ActionCountryAll;

export const loadActionCreator = (payload: Country[]): ActionCountry => ({
  type: 'load',
  payload,
});
