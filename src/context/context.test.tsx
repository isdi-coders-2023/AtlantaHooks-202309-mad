import { render } from '@testing-library/react';
import { AppContextProvider } from '../context/provider';
import { useCountry } from '../hooks/useCountry';
import { AppContext } from './context';
import '@testing-library/jest-dom';

jest.mock('../hooks/useCountry');

const mockContextData = {
  countriesState: {
    country: [{ name: 'Country 1' }, { name: 'Country 2' }],
    page: 1,
  },
  loadCountries: jest.fn(),
  handleChangePage: jest.fn(),
};

describe('AppContext', () => {
  it('Must be initialized correctly', () => {
    (useCountry as jest.Mock).mockReturnValue(mockContextData);
    const { container } = render(
      <AppContextProvider>
        <AppContext.Consumer>
          {(value) => (
            <div data-test="context-test">
              Country Count: {value.countriesState.country.length}
              Page: {value.countriesState.page}
            </div>
          )}
        </AppContext.Consumer>
      </AppContextProvider>
    );

    expect(container).toHaveTextContent('Country Count: 2');
    expect(container).toHaveTextContent('Page: 1');
  });
});
