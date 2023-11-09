import { Country } from '../model/country.types';
import { Repo } from '../services/repo';

describe('Given repo class', () => {
  let jsonMock: jest.Mock;
  beforeEach(() => {
    jsonMock = jest.fn().mockResolvedValue([]);
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jsonMock,
    });
  });
  describe('When we instantiate getCountry with url address', () => {
    test('Then method getCountry should be used', async () => {
      const expected: Country[] = [];
      const repo = new Repo();
      const test = 'test';
      const result = await repo.getCountry(test);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });

  describe('When we instantiate it and response is ok', () => {
    test('Then method getCountry should be used', async () => {
      const expected: Country[] = [];
      const repo = new Repo();
      const result = await repo.getCountry();
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
      const repo = new Repo();
      await expect(repo.getCountry()).rejects.toThrow();
    });
  });
});
