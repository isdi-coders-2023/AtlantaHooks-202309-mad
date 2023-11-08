import { render, screen } from '@testing-library/react';
import { AppContext, ContextStructure } from '../../context/context';
import { List } from './list';
import '@testing-library/jest-dom';
import { Country } from '../../model/country.types';

const mockContext: ContextStructure = {
  countriesState: { page: 1, country: [] as Country[] },
  loadCountries: jest.fn(),
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
  });
});
