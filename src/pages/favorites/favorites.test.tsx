import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Favorites from './favorites';
import { PrivateList } from '../../components/privateList/list_private';

jest.mock('../../components/privateList/list_private');

describe('Given HomePage', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Favorites></Favorites>);
    });

    test('renders App with List', () => {
      expect(PrivateList).toHaveBeenCalled();
    });
  });
});
