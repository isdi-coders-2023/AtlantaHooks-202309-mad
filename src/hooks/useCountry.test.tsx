import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import { useEffect, useReducer } from 'react';
import { useCountry } from './useCountry';
import { Country } from '../model/country.types';
import { PrivateRepo, Repo } from '../services/repo';
import userEvent from '@testing-library/user-event';
import { AppState } from '../reducers/reducer';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest.fn().mockReturnValue([{}, jest.fn()]),
}));
describe('', () => {
  const mockCountry: Country = [
    {
      name: {
        common: 'Colombia',
      },
    },
  ] as unknown as Country;

  Repo.prototype.getCountry = jest.fn().mockResolvedValue(mockCountry);

  const mockPrivateCountry: Country = [
    {
      name: {
        common: 'Colombia',
      },
    },
  ] as unknown as Country;

  PrivateRepo.prototype.getCountry = jest
    .fn()
    .mockResolvedValue(mockPrivateCountry);
  describe('', () => {
    beforeEach(async () => {
      const TestComponent = () => {
        const {
          loadCountries,
          handleChangePage,
          handleChangeFilter,
          loadPrivateCountries,
          handleChangePrivatePage,
          handleChangePrivateFilter,
        } = useCountry();
        const mockIncrement = -1;
        const mockLang = 'english';

        useEffect(() => {
          loadCountries();
        }, [loadCountries]);

        useEffect(() => {
          loadPrivateCountries();
        }, [loadPrivateCountries]);

        return (
          <>
            <button onClick={loadCountries}>Load</button>
            <button
              onClick={() => {
                handleChangePage(mockIncrement);
              }}
            >
              Change
            </button>
            <button onClick={() => handleChangeFilter(mockLang)}>filter</button>

            <button onClick={loadPrivateCountries}>privateLoad</button>
            <button
              onClick={() => {
                handleChangePrivatePage(mockIncrement);
              }}
            >
              privateChange
            </button>
            <button onClick={() => handleChangePrivateFilter(mockLang)}>
              privatefilter
            </button>
          </>
        );
      };

      await act(async () => {
        render(<TestComponent></TestComponent>);
      });
    });
    test('', async () => {
      const button = screen.getByRole('button', { name: 'Load' });
      await userEvent.click(button);
      expect(Repo.prototype.getCountry).toHaveBeenCalled();
    });
    test('', async () => {
      const mockState: AppState = {
        page: 1,
        country: [],
      } as unknown as AppState;
      const mockReducer = jest.fn();
      const button = screen.getByRole('button', { name: 'Change' });
      await userEvent.click(button);
      expect(useReducer(mockReducer, mockState)[1]).toHaveBeenCalled();
    });
    test('', async () => {
      const button = screen.getByRole('button', { name: 'filter' });
      await userEvent.click(button);
      expect(Repo.prototype.getCountry).toHaveBeenCalled();
    });

    test('', async () => {
      const button = screen.getByRole('button', { name: 'privateLoad' });
      await userEvent.click(button);
      expect(PrivateRepo.prototype.getCountry).toHaveBeenCalled();
    });
    test('', async () => {
      const mockState: AppState = {
        privatePage: 1,
        privateCountry: [],
      } as unknown as AppState;
      const mockReducer = jest.fn();
      const button = screen.getByRole('button', { name: 'privateChange' });
      await userEvent.click(button);
      expect(useReducer(mockReducer, mockState)[1]).toHaveBeenCalled();
    });
    test('', async () => {
      const button = screen.getByRole('button', { name: 'privatefilter' });
      await userEvent.click(button);
      expect(PrivateRepo.prototype.getCountry).toHaveBeenCalled();
    });
  });
});
