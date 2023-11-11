import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { AppContext, ContextStructure } from '../../context/context';
import { PrivatePage } from './private_page';

const mockContext: ContextStructure = {
  countriesState: { privatePage: 2 },
  handleChangePrivatePage: jest.fn(),
} as unknown as ContextStructure;
describe('Given list component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <PrivatePage />
        </AppContext.Provider>
      );
    });

    test('Page component', async () => {
      const nextButton = screen.getByText('Next Page');
      await userEvent.click(nextButton);
      expect(mockContext.handleChangePrivatePage).toHaveBeenCalled();
    });
    test('Page component', async () => {
      const prevButton = screen.getByText('Previous Page');
      await userEvent.click(prevButton);
      expect(mockContext.handleChangePrivatePage).toHaveBeenCalled();
    });
  });
});
