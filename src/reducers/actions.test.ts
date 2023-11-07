import { Country } from '../model/country.types';
import { loadActionCreator } from '../reducers/actions'; // Asegúrate de importar el archivo correcto

describe('loadActionCreator', () => {
  it('debería crear una acción de tipo "load" con el payload correcto', () => {
    // Definir el payload de prueba
    const payload = [{ name: { common: 'Hola' } } as Country];

    const action = loadActionCreator(payload);

    // Verificar que el tipo de acción sea "load"za
    expect(action.type).toBe('load');

    // Verificar que el payload coincida con el valor de prueba
    expect(action.payload).toEqual(payload);
  });
});
