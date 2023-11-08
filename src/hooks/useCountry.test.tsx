import { act, renderHook } from '@testing-library/react';
import { useCountry } from './useCountry';

jest.mock('../services/repo', () => ({
  Repo: jest.fn(() => ({
    getCountry: jest.fn(() => Promise.resolve([])),
  })),
}));

describe('Given useCountry custom Hook', () => {
  describe('useCountry Hook', () => {
    it('should load countries and update state', async () => {
      const { result } = renderHook(() => useCountry());
      act(() => {
        result.current.loadCountries();
      });
      expect(result.current.countriesState.country).toHaveLength(0);
    });

    it('should change the page correctly', () => {
      const { result } = renderHook(() => useCountry());
      act(() => {
        result.current.handleChangePage(1);
      });
      expect(result.current.countriesState.page).toBe(2);
      act(() => {
        result.current.handleChangePage(-1);
      });
      expect(result.current.countriesState.page).toBe(1);
    });

    it('should handle increment greater than 1 correctly', () => {
      const { result } = renderHook(() => useCountry());
      act(() => {
        result.current.handleChangePage(2);
      });
      expect(result.current.countriesState.page).toBe(3);
    });

    it('should handle decrement that goes below the minimum page correctly', () => {
      const { result } = renderHook(() => useCountry());
      act(() => {
        result.current.handleChangePage(-1);
      });
      expect(result.current.countriesState.page).toBe(1);
    });
  });
});
