import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import DetailsPage from './details';

describe('Given ErrorPage component', () => {
  describe('When we instantiate', () => {
    render(<DetailsPage></DetailsPage>);

    test('It should be in the document', () => {
      const element = screen.getByText(/Capital/i);
      expect(element).toBeInTheDocument();
    });
  });
});
