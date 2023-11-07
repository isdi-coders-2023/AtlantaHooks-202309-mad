import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';

import { Footer } from '../footer/footer';
import { List } from '../list/list';
import { Header } from '../header/header';

jest.mock('../footer/footer');
jest.mock('../list/list');
jest.mock('../header/header');

describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<App></App>);
    });
    test('renders App with Footer', () => {
      expect(Footer).toHaveBeenCalled();
    });
    test('renders App with List', () => {
      expect(List).toHaveBeenCalled();
    });
    test('renders App with Header', () => {
      expect(Header).toHaveBeenCalled();
    });
  });
});
