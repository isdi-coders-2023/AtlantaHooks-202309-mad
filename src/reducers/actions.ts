import { Country } from '../model/country.types';

export type ActionCountryAll =
  | 'unknown'
  | 'load'
  | 'changePage'
  | 'privateLoad'
  | 'changePrivatePage'
  | 'update'
  | 'delete'
  | 'create';

type ActionCountryDelete = {
  type: 'delete';
  payload: Country;
};

type ActionCountryUpdate = {
  type: 'update';
  payload: Country;
};

type ActionCountryCreate = {
  type: 'create';
  payload: Country;
};

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
  | ActionChangePrivatePage
  | ActionCountryDelete
  | ActionCountryCreate
  | ActionCountryUpdate;

export const deleteActionCreator = (payload: Country): ActionCountry => ({
  type: 'delete',
  payload,
});

export const createActionCreator = (payload: Country): ActionCountry => ({
  type: 'create',
  payload,
});

export const updateActionCreator = (payload: Country): ActionCountry => ({
  type: 'update',
  payload,
});

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
