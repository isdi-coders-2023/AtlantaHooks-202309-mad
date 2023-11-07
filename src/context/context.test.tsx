import { useContext } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AppContext, ContextStructure } from './context';
import '@testing-library/jest-dom';

function MockComponent() {
  const { page, setPage } = useContext<ContextStructure>(AppContext);

  const handleButtonClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <p>Current Page: {page}</p>
      <button onClick={handleButtonClick}>Increment Page </button>
    </div>
  );
}

test('Context test', () => {
  const contextValue: ContextStructure = {
    page: 2,
    setPage: jest.fn(),
    countryTools: {
      countries: [],
      loadCountries: jest.fn(),
    },
  };

  const { getByText } = render(
    <AppContext.Provider value={contextValue}>
      <MockComponent />
    </AppContext.Provider>
  );

  expect(getByText('Current Page: 2')).toBeInTheDocument();

  const button = getByText('Increment Page');
  fireEvent.click(button);

  expect(contextValue.setPage).toHaveBeenCalledTimes(1);

  expect(contextValue.setPage).toHaveBeenCalledWith(3);
});
