import { render } from '@testing-library/react';
import { Header } from './header';
import '@testing-library/jest-dom';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    test('Renderiza el componente Header con un elemento h1', () => {
      const { container } = render(<Header />);

      const h1Element = container.querySelector('h1');

      expect(h1Element).toBeInTheDocument();
    });
  });
});
