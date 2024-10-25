import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Mock bileşenleri
jest.mock('./_components/navigation', () => () => <div>Mock Navigation</div>);
jest.mock('./_components/actions', () => () => <div>Mock Actions</div>);
jest.mock('./_components/tab-header/TabHeader', () => () => (
  <div>Mock TabHeader</div>
));

describe('Header', () => {
  test('renders Navigation, Actions, and TabHeader components', () => {
    render(<Header />);

    expect(screen.getByText(/Mock Navigation/i)).toBeInTheDocument();

    expect(screen.getByText(/Mock Actions/i)).toBeInTheDocument();

    expect(screen.getByText(/Mock TabHeader/i)).toBeInTheDocument();
  });

  test('renders the header with correct class names', () => {
    const { container } = render(<Header />);
    const headerElement = container.querySelector('header');

    expect(headerElement).toBeInTheDocument();
  });
});
