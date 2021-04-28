import { render, screen } from '@testing-library/react';
import Main from './main';

describe('Main', () => {
  test('renders main', () => {
    render(<Main />);
    screen.debug();
  });
});
