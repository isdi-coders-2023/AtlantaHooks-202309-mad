import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './home';
import { List } from '../../components/list/list';

jest.mock('../../components/list/list');

describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<HomePage></HomePage>);
    });

    test('renders App with List', () => {
      expect(List).toHaveBeenCalled();
    });
  });
});
