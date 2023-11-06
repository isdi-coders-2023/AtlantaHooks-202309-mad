import { Country } from '../model/country.types';
import { getCountries } from './repo';

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
    test('Then method getTask should be used', async () => {
      const expected: Country[] = [];
      const result = await getCountries();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
});

describe('When we instantiate it and response is bad', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
    });
  });
  test('Then method getTask should be used', async () => {
    const repo = getCountries();
    expect(repo).rejects.toThrow();
  });
});
