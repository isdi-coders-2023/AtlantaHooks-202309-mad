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

    test('It should call handlePrevious', async () => {
      const element = screen.getAllByRole('button')[0];
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      expect(mockContext.handleChangePage).toHaveBeenCalled();
    });

    test('It should call handlePrevious', async () => {
      const element = screen.getAllByRole('button')[1];
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      expect(mockContext.handleChangePage).toHaveBeenCalled();
    });
  });
});
