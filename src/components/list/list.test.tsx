import { render, screen } from '@testing-library/react';
import { AppContext, ContextStructure } from '../../context/context';
import { List } from './list';
import '@testing-library/jest-dom';
import { Country } from '../../model/country.types';

const mockContext: ContextStructure = {
  countryTools: {
    countries: [{ name: { common: 'Hola' } }] as Country[],
    loadCountries: jest
      .fn()
      .mockResolvedValue([{ name: { common: 'Hola' } } as Country]),
  },
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <List></List>
        </AppContext.Provider>
      );
    });
    test('renders List with Card', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
    test('', () => {
      expect(mockContext.countryTools.loadCountries).toHaveBeenCalled();
      const element = screen.getByText('Hola');
      expect(element).toBeInTheDocument();
    });
  });
});
