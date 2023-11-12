import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { AppContext, ContextStructure } from '../../context/context';
import { Country } from '../../model/country.types';

import { AppState } from '../../reducers/reducer';
import PrivateDetailsPage from './fav_details';

const mockContext: ContextStructure = {
  countriesState: {
    privateCountry: [
      {
        name: { common: 'Hello' },
        flags: {
          png: 'path_to_image.png',
        },
      } as Country,
    ],
    privatePage: 1,
  } as AppState,
  loadPrivateCountries: jest.fn(),
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={mockContext}>
            <PrivateDetailsPage></PrivateDetailsPage>
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
