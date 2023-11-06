import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';

describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<App></App>);
    });
    test('renders App with Footer', () => {
      expect(screen.getByText('Atlanta Hooks Team')).toBeInTheDocument();
    });
  });
});

// test('Then it should be the role', () => {
//   const element = screen.getByRole('main');
//   expect(element).toBeInTheDocument();
