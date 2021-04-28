import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('header', () => {
  test('renders main title', () => {
    render(<Header />);
    expect(screen.getByText('Code Development Project')).toBeInTheDocument();
  });
});
