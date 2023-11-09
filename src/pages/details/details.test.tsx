import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { AppContext, ContextStructure } from '../../context/context';
import { Country } from '../../model/country.types';
import DetailsPage from './details';
import { AppState } from '../../reducers/reducer';

const mockContext: ContextStructure = {
  countriesState: {
    country: [{ name: { common: 'Hello' } } as Country],
    page: 1,
  } as AppState,
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={mockContext}>
            <DetailsPage></DetailsPage>
          </AppContext.Provider>
        </MemoryRouter>
      );
    });
    test('renders List with Card', () => {
      const element = screen.getAllByRole('heading');
      expect(element[1]).toBeInTheDocument();
    });
  });
});
