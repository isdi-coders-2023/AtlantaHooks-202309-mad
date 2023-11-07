import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useCountry } from './useCountry';
import fetchMock from 'jest-fetch-mock';

import '@testing-library/jest-dom';

jest.mock('../services/repo', () => ({
  Repo: jest.fn(),
}));

beforeAll(() => {
  fetchMock.enableMocks();
});

afterEach(() => {
  fetchMock.resetMocks();
});

describe('useCountry', () => {
  it('should fetch and load countries successfully', async () => {
    const mockCountries = [{ name: 'Country 1' }, { name: 'Country 2' }];
    fetchMock.mockResponse(JSON.stringify(mockCountries), {
      status: 200,
      headers: { 'Content-type': 'application/json' },
    });

    function TestComponent() {
      const { countries, loadCountries } = useCountry();
      return (
        <div>
          <button onClick={loadCountries}>Load Countries</button>
          <ul>
            {countries.map((country, index) => (
              <li key={index}>{country.name.common}</li>
            ))}
          </ul>
        </div>
      );
    }

    render(<TestComponent />);

    // Verifica que el botón "Load Countries" está presente
    expect(screen.getByText('Load Countries')).toBeInTheDocument();

    // Simula hacer clic en el botón
    userEvent.click(screen.getByText('Load Countries'));

    // Espera a que se carguen los países y se renderice la lista
    await waitFor(() => {
      // Busca el texto exacto en los elementos li
      expect(screen.getByText('Country 1')).toBeInTheDocument();
      expect(screen.getByText('Country 2')).toBeInTheDocument();
    });
  });
});
