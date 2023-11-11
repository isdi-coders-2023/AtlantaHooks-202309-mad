import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PrivateCard } from './private_card';
import { Country } from '../../model/country.types';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Footer component', () => {
  const mockCountry = {
    name: { common: 'test', official: 'test' },
    flags: { png: 'test' },
  } as Country;
  beforeEach(() => {
    render(
      <Router>
        <PrivateCard country={mockCountry}></PrivateCard>
      </Router>
    );
  });

  test('Then it should render the country name', () => {
    const element = screen.getByText(mockCountry.name.common);
    expect(element).toBeInTheDocument();
  });
});
