import { Country } from '../model/country.types';
import { ActionCountry } from './actions';

export type AppState = {
  country: Country[];
  page: number;
  privateCountry: Country[];
  privatePage: number;
};

export function countryReducer(
  state: AppState,
  { type, payload }: ActionCountry
): AppState {
  switch (type) {
    case 'create':
      return {
        ...state,
        privateCountry: [...state.privateCountry, payload],
      };
    case 'delete':
      return {
        ...state,
        privateCountry: state.privateCountry.filter(
          (item: Country) => item.id !== payload
        ),
      };

    case 'update':
      return {
        ...state,
        privateCountry: state.privateCountry.map((item: Country) =>
          item.id === payload.id ? payload : item
        ),
      };

    case 'load':
      return { ...state, country: payload };
    case 'changePage':
      return { ...state, page: payload };
    case 'privateLoad':
      return { ...state, privateCountry: payload };
    case 'changePrivatePage':
      return { ...state, privatePage: payload };
    default:
      return { ...state };
  }
}
