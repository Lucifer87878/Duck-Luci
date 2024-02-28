import React from 'react';

interface DropdownProps {
  options: { value: number; label: string }[];
  onChange: (value: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  return (
    <select onChange={(e) => onChange(Number(e.target.value))}>
      <option value="">---Choose---</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
