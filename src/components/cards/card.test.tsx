import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './card';
import { Country } from '../../model/country.types';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    render(
      <Card
        country={
          {
            name: { official: '' },
            capital: [''],
            region: '',
            flags: { png: '' },
            population: 10,
          } as Country
        }
      ></Card>
    );

    test('It should be in the document', () => {
      const element = screen.getByRole('button');
      const heading = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });
});
