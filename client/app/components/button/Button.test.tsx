import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    const { getByText } = render(<Button text="Click Me" onClick={() => {}} />);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text="Click Me" onClick={handleClick} />);
    
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders disabled button when disabled prop is true', () => {
    const { getByText } = render(<Button text="Click Me" onClick={() => {}} disabled />);
    const button = getByText('Click Me');
    
    expect(button).toBeDisabled();
  });

  test('applies custom className correctly', () => {
    const { getByText } = render(<Button text="Click Me" onClick={() => {}} className="custom-class" />);
    const button = getByText('Click Me');
    
    expect(button).toHaveClass('custom-class');
  });

  test('applies outlined style when outlined prop is true', () => {
    const { getByText } = render(<Button text="Click Me" onClick={() => {}} outlined />);
    const button = getByText('Click Me');
    
    expect(button).toHaveClass('outlined');
  });
});
