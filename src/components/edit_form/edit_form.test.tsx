import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../../context/context';
import { Country } from '../../model/country.types';

import { AppState } from '../../reducers/reducer';
import { EditCountry } from './edit_form';

// Definición del tipo ContextStructure
type ContextStructure = {
  countriesState: AppState;
  loadCountries: () => Promise<void>;
  handleChangePage: (increment: number) => void;
  handleChangeFilter: (language: string) => Promise<void>;
  addCountry: (country: Partial<Country>) => Promise<void>;
  updateCountry: (id: string, country: Partial<Country>) => Promise<void>;
  deleteCountry: (id: string) => Promise<void>;
  loadPrivateCountries: () => Promise<void>; // Agregado
  handleChangePrivatePage: (increment: number) => void; // Agregado
};

// Mock de PrivateDetailsPage
const mockContext: ContextStructure = {
  countriesState: {
    // Asegúrate de ajustar las propiedades según tus necesidades
    privateCountry: [{ name: { common: 'Hello' } } as Country],
  } as AppState,
  loadCountries: jest.fn(),
  handleChangePage: jest.fn(),
  handleChangeFilter: jest.fn(),
  addCountry: jest.fn(),
  updateCountry: jest.fn(),
  deleteCountry: jest.fn(),
  loadPrivateCountries: jest.fn(), // Agregado
  handleChangePrivatePage: jest.fn(), // Agregado
};

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider
            value={{
              countriesState: mockContext.countriesState,
              loadCountries: mockContext.loadCountries,
              handleChangePage: mockContext.handleChangePage,
              handleChangeFilter: mockContext.handleChangeFilter,
              addCountry: mockContext.addCountry,
              updateCountry: mockContext.updateCountry,
              deleteCountry: mockContext.deleteCountry,
              loadPrivateCountries: mockContext.loadPrivateCountries, // Agregado
              handleChangePrivatePage: mockContext.handleChangePrivatePage, // Agregado
            }}
          >
            <EditCountry />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test('renders List with Card', () => {
      const elements = screen.getAllByRole('heading');
      expect(elements.length).toBe(1); // Cambiado a 1 si esperas un solo elemento
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
