import React from 'react';
import './Dropdown.css'; 
const Dropdown = ({ options, selectedValue, onSelect }) => {
  return (
    <div className="dropdown">
      <select value={selectedValue} onChange={(e) => onSelect(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
