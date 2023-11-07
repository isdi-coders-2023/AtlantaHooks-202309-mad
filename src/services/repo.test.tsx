import { Country } from '../model/country.types';
import { Repo } from '../services/repo';

describe('Given repo class', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getCountry should be used', async () => {
      const expected: Country[] = [];
      const repo = new Repo(); // Crear una instancia de Repo
      const result = await repo.getCountry(); // Llamar al método en la instancia
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });

  describe('When we instantiate it and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getCountry should throw an error', async () => {
      const repo = new Repo(); // Crear una instancia de Repo
      await expect(repo.getCountry()).rejects.toThrow();
    });
  });
});
