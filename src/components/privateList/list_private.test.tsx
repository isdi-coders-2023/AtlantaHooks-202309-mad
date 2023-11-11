import { render, screen } from '@testing-library/react';
import { AppContext, ContextStructure } from '../../context/context';
import { PrivateList } from './list_private';
import '@testing-library/jest-dom';
import { Country } from '../../model/country.types';

const mockContext: ContextStructure = {
  countriesState: { privatePage: 1, privateCountry: [] as Country[] },
  loadPrivateCountries: jest.fn(),
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <PrivateList></PrivateList>
        </AppContext.Provider>
      );
    });
    test('renders List with Card', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
