import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { Filter } from './filter';
import { AppContextProvider } from '../../context/provider';

describe('Given list component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <AppContextProvider>
            <Filter />
          </AppContextProvider>
        </Router>
      );
    });

    test('Page component', async () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
    });
  });
});
