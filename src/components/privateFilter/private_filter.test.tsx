import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppContextProvider } from '../../context/provider';
import { PrivateFilter } from './private_filter';

describe('Given list component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <AppContextProvider>
            <PrivateFilter />
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
