import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import { useEffect, useReducer } from 'react';
import { useCountry } from './useCountry';
import { Country } from '../model/country.types';
import { Repo } from '../services/repo';
import userEvent from '@testing-library/user-event';
import { AppState } from '../reducers/reducer';
/* import { AppState } from '../reducers/reducer'; */

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
  describe('', () => {
    beforeEach(async () => {
      const TestComponent = () => {
        const { loadCountries, handleChangePage, handleChangeFilter } =
          useCountry();
        const mockIncrement = -1;
        const mockLang = 'english';

        useEffect(() => {
          loadCountries();
        }, [loadCountries]);

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
  });
});
