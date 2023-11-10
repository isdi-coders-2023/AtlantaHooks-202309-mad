import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './home';
import { List } from '../../components/list/list';
import { Filter } from '../../components/filter/filter';

jest.mock('../../components/list/list');
jest.mock('../../components/filter/filter');

describe('Given HomePage', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<HomePage></HomePage>);
    });

    test('renders App with List', () => {
      expect(List).toHaveBeenCalled();
    });
  });
});

describe('Given HomePage', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<HomePage></HomePage>);
    });

    test('renders App with Filyter', () => {
      expect(Filter).toHaveBeenCalled();
    });
  });
});
