// Reducer
// Función pura
// Recibe el estado y una acción
// Retorna un nuevo estado

import { Country } from '../model/country.types';
import { ActionCountry } from './actions';

export function countryReducer(
  state: Country[],
  { type, payload }: ActionCountry
): Country[] {
  switch (type) {
    case 'load':
      return payload;

    default:
      return [...state];
  }
}
