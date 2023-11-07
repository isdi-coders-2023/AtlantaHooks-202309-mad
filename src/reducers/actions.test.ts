import { Country } from '../model/country.types';
import { loadActionCreator } from '../reducers/actions'; // Asegúrate de importar el archivo correcto

describe('loadActionCreator', () => {
  it('debería crear una acción de tipo "load" con el payload correcto', () => {
    const payload = [{ name: { common: 'Hola' } } as Country];

    const action = loadActionCreator(payload);

    expect(action.type).toBe('load');

    expect(action.payload).toEqual(payload);
  });
});
