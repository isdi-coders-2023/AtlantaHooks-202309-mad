import { Country } from '../model/country.types';

export type ActionCountryAll =
  | 'load'
  | 'unknown'
  | 'changePage'
  | 'privateLoad';

type ActionCountryLoad = {
  type: 'load';
  payload: Country[];
};
type ActionChangePage = {
  type: 'changePage';
  payload: number;
};
type ActionPrivateCountryLoad = {
  type: 'privateLoad';
  payload: Country[];
};
type ActionChangePrivatePage = {
  type: 'changePrivatePage';
  payload: number;
};

export type ActionCountry =
  | ActionCountryLoad
  | ActionChangePage
  | ActionPrivateCountryLoad
  | ActionChangePrivatePage;

export const loadActionCreator = (payload: Country[]): ActionCountry => ({
  type: 'load',
  payload,
});

export const changePageActionCreator = (payload: number): ActionCountry => ({
  type: 'changePage',
  payload,
});

export const loadPrivateActionCreator = (
  payload: Country[]
): ActionCountry => ({
  type: 'privateLoad',
  payload,
});

export const changePrivatePageActionCreator = (
  payload: number
): ActionCountry => ({
  type: 'changePrivatePage',
  payload,
});
