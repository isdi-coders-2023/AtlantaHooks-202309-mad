import { Country } from '../model/country.types';
import { PrivateRepo, Repo } from '../services/repo';
import 'jest-fetch-mock';

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
      const repo = new PrivateRepo();
      const test = 'test';
      const result = await repo.getCountry(test);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });

  describe('When we instantiate it and response is ok', () => {
    test('Then method getCountry should be used', async () => {
      const expected: Country[] = [];
      const repo = new PrivateRepo();
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
      const repo = new PrivateRepo();
      await expect(repo.getCountry()).rejects.toThrow();
    });
  });
});

jest.mock('node-fetch');

describe('PrivateRepo', () => {
  const privateRepo = new PrivateRepo();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('getCountry returns an array of countries', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: async () => [{ name: 'Country 1' }, { name: 'Country 2' }],
    } as Response);

    const countries = await privateRepo.getCountry();

    expect(countries).toHaveLength(2);
  });

  it('createCountry creates a new country', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: 'New Country' }),
    } as Response);

    const newCountry = await privateRepo.createCountry({
      name: { common: 'Hello' },
    } as Country);

    expect(newCountry.name).toBe('New Country');
  });

  it('updateCountry updates an existing country', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: 'Updated Country' }),
    } as Response);

    const updatedCountry = await privateRepo.updateCountry('123', {
      name: { common: 'Hello' },
    } as Country);

    expect(updatedCountry.name).toBe('Updated Country');
  });

  it('deleteCountry deletes an existing country', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: async () => [{ name: 'Country 1' }, { name: 'Country 3' }],
    } as Response);

    const remainingCountries = await privateRepo.deleteCountry('456');

    expect(remainingCountries).toHaveLength(2);
  });
});
