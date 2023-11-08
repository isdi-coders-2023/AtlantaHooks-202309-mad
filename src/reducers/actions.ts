import { Country } from '../model/country.types';

export type ActionCountryAll = 'load' | 'unknown' | 'changePage';

type ActionCountryLoad = {
  type: 'load';
  payload: Country[];
};
type ActionChangePage = {
  type: 'changePage';
  payload: number;
};

export type ActionCountry = ActionCountryLoad | ActionChangePage;

export const loadActionCreator = (payload: Country[]): ActionCountry => ({
  type: 'load',
  payload,
});

export const changePageActionCreator = (payload: number): ActionCountry => ({
  type: 'changePage',
  payload,
});
