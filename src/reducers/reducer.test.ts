import { countryReducer } from './reducer';
import { loadActionCreator } from './actions';
import { Country } from '../model/country.types';

describe('countryReducer', () => {
  it('debería manejar una acción "load"', () => {
    const initialState: Country[] = [];

    const payload = [{ name: { common: 'Hola' } } as Country];
    const action = loadActionCreator(payload);

    const newState = countryReducer(initialState, action);

    expect(newState).toEqual(payload);
  });

  it('debería manejar una acción desconocida', () => {
    const initialState: Country[] = [{ name: { common: 'Hola' } } as Country];

    const action: { type: 'unknown'; payload: never[] } = {
      type: 'unknown',
      payload: [],
    };

    const newState = countryReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
