"use client";

import React from "react";
import { useStyles } from './checkbox.styles';

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  disabled = false,
  description,
  onChange,
}) => {
  const { inputClassName, labelClassName } = useStyles({ checked, disabled });

  return (
    <div className="flex w-full items-center me-4 group">
      <input
        onChange={onChange}
        checked={checked}
        id="red-checkbox"
        type="checkbox"
        className={inputClassName}
        disabled={disabled}
      />
      <label
        htmlFor="red-checkbox"
        className={labelClassName}
      >
        {description}
      </label>
    </div>
  );
};

export default Checkbox;
