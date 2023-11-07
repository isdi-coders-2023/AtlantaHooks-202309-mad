import { countryReducer } from './reducer';
import { loadActionCreator } from './actions';
import { Country } from '../model/country.types';

describe('countryReducer', () => {
  it('debería manejar una acción "load"', () => {
    // Estado inicial
    const initialState: Country[] = [];

    // Crea una acción de carga con un payload de prueba
    const payload = [{ name: { common: 'Hola' } } as Country];
    const action = loadActionCreator(payload);

    // Llama al reducer con el estado inicial y la acción
    const newState = countryReducer(initialState, action);

    // Verifica que el estado resultante sea igual al payload de la acción
    expect(newState).toEqual(payload);
  });

  // En tu archivo de prueba (reducer.test.ts)
  it('debería manejar una acción desconocida', () => {
    // Estado inicial
    const initialState: Country[] = [{ name: { common: 'Hola' } } as Country];

    // Crea una acción con un tipo desconocido ("unknown") y payload vacío
    const action: { type: 'unknown'; payload: never[] } = {
      type: 'unknown',
      payload: [],
    };

    // Llama al reducer con el estado inicial y la acción
    const newState = countryReducer(initialState, action);

    // Verifica que el estado resultante sea igual al estado inicial
    expect(newState).toEqual(initialState);
  });
});
