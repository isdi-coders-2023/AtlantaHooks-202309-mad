import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { Header } from './header';

describe('Header Component', () => {
  test('renders header with "My Favorites" link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const headerElement = screen.getByRole('heading', { name: /countries/i });
    const linkElement = screen.getByRole('link', { name: /my favorites/i });

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/favorites');
  });
});
