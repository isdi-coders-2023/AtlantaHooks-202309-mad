import { countryReducer, AppState } from './reducer';
import { ActionCountry } from './actions'; // Asegúrate de importar el tipo de acción correcto
import { Country } from '../model/country.types';

describe('countryReducer', () => {
  test('should handle load action', () => {
    const initialState: AppState = {
      country: [],
      page: 1,
      privateCountry: [],
      privatePage: 1,
    };

    const action: ActionCountry = {
      type: 'load',
      payload: [
        { name: { common: 'Country1' } } as Country,
        { name: { common: 'Country2' } } as Country,
      ],
    };

    const newState = countryReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      country: action.payload,
    });
  });

  test('should handle changePage action', () => {
    const initialState: AppState = {
      country: [],
      page: 1,
      privateCountry: [],
      privatePage: 1,
    };

    const action: ActionCountry = {
      type: 'changePage',
      payload: 2,
    };

    const newState = countryReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      page: action.payload,
    });
  });

  test('should handle privateLoad action', () => {
    const initialState: AppState = {
      country: [],
      page: 1,
      privateCountry: [],
      privatePage: 1,
    };

    const action: ActionCountry = {
      type: 'privateLoad',
      payload: [
        { name: { common: 'PrivateCountry1' } } as Country,
        { name: { common: 'PrivateCountry2' } } as Country,
      ],
    };

    const newState = countryReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      privateCountry: action.payload,
    });
  });

  test('should handle changePrivatePage action', () => {
    const initialState: AppState = {
      country: [],
      page: 1,
      privateCountry: [],
      privatePage: 1,
    };

    const action: ActionCountry = {
      type: 'changePrivatePage',
      payload: 3,
    };

    const newState = countryReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      privatePage: action.payload,
    });
  });
});
