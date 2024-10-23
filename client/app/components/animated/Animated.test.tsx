import React from 'react';
import { render } from '@testing-library/react';
import Animated from './Animated';
import '@testing-library/jest-dom'; 

describe('Animated Component', () => {
  test('renders children correctly', () => {
    const { getByText } = render(
      <Animated>
        <div>Test Content</div>
      </Animated>
    );
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  test('applies initial, animate, exit and transition props', () => {
    const { container } = render(
      <Animated
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: '0', opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.5, ease: 'linear' }}
      >
        <div>Test Content</div>
      </Animated>
    );

    const motionDiv = container.firstChild;
    expect(motionDiv).toBeInTheDocument();
    expect(motionDiv).toHaveStyle('z-index: 99');
  });
});
