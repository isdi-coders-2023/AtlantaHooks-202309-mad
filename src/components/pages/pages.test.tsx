import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { AppContext, ContextStructure } from '../../context/context';
import { Page } from './page';

const mockContext: ContextStructure = {
  countriesState: { page: 2 },
  handleChangePage: jest.fn(),
} as unknown as ContextStructure;
describe('Given list component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <Page />
        </AppContext.Provider>
      );
    });

    test('Page component', async () => {
      const nextButton = screen.getByText('Next Page');
      await userEvent.click(nextButton);
      expect(mockContext.handleChangePage).toHaveBeenCalled();
    });
    test('Page component', async () => {
      const prevButton = screen.getByText('Previous Page');
      await userEvent.click(prevButton);
      expect(mockContext.handleChangePage).toHaveBeenCalled();
    });
  });
});
