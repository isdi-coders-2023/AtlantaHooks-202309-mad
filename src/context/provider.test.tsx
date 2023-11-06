import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppContextProvider } from './provider';
import '@testing-library/jest-dom';

const MockChild: React.FC = () => <div>Mock Child</div>;

test('AppContextProvider sets up the context correctly', () => {
  render(
    <AppContextProvider>
      <MockChild />
    </AppContextProvider>
  );

  expect(screen.getByText('Mock Child')).toBeInTheDocument();
});
