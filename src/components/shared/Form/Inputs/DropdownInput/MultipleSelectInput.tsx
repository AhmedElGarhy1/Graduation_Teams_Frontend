import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const MultipleSelectInput = () => {
  const [selectedValues, setSelectedValues] = useState([]); // Initialize as an empty array

  const handleChange = (event: any) => {
    setSelectedValues(event.target.value);
  };

  return (
    <Select
      value={selectedValues} // Ensure selectedValues is an array
      onChange={handleChange}
      multiple // Make sure you have the `multiple` prop
    >
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </Select>
  );
};

export default MultipleSelectInput;
