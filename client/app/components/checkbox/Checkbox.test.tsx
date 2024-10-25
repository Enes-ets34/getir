import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  test('renders with the correct label', () => {
    render(
      <Checkbox
        checked={false}
        description='Checkbox label'
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText('Checkbox label')).toBeInTheDocument();
  });

  test('renders as checked when checked prop is true', () => {
    render(
      <Checkbox
        checked={true}
        description='Checked Checkbox label'
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText('Checked Checkbox label')).toBeChecked();
  });

  test('renders as disabled when disabled prop is true', () => {
    render(
      <Checkbox
        checked={false}
        description='Disabled Checkbox label'
        disabled={true}
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText('Disabled Checkbox label')).toBeDisabled();
  });

  test('calls onChange when clicked', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        checked={false}
        description='Checkbox label'
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Checkbox label'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('generates unique id when id is not provided', () => {
    render(
      <Checkbox
        checked={false}
        description='Checkbox label'
        onChange={() => {}}
      />
    );

    const checkbox = screen.getByLabelText('Checkbox label');
    expect(checkbox).toHaveAttribute('id');
    expect(checkbox.getAttribute('id')).toMatch(/^cb-/);
  });
});
