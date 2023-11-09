import { Country } from '../model/country.types';
import { ActionCountry } from './actions';

export type AppState = {
  country: Country[];
  page: number;
};
export function countryReducer(
  state: AppState,
  { type, payload }: ActionCountry
): AppState {
  switch (type) {
    case 'load':
      return { ...state, country: payload };
    case 'changePage':
      return { ...state, page: payload };
    default:
      return { ...state };
  }
}
