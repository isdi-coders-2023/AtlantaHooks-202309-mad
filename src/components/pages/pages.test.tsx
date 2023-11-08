import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Page } from './page';
import { userEvent } from '@testing-library/user-event';
import { AppContext, ContextStructure } from '../../context/context';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    const setPage = jest.fn();
    const page = 1;
    const value: ContextStructure = {
      page,
      setPage,
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <AppContext.Provider value={value}>
          <Page />
        </AppContext.Provider>
      );
    });

    test('It should call handlePrevious', async () => {
      const element = screen.getAllByRole('button')[0];
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      expect(setPage).toHaveBeenCalledWith(1);
    });

    test('It should call handleNext', async () => {
      const element = screen.getAllByRole('button')[1];
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      expect(setPage).toHaveBeenCalledWith(2);
    });
  });
});
