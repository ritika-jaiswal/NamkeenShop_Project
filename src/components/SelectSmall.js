import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel 
        id="demo-select-small-label" 
        // sx={{ color: 'goldenrod' }} // Set the outline color
      >
        Quantity
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        sx={{
          '& .MuiSelect-icon': {
            color: 'goldenrod', // Set the select icon color
          },
        }}
      >
        <MenuItem 
          value="" 
        //   sx={{ color: 'goldenrod' }} // Set the text color
        >
          <em>None</em>
        </MenuItem>
        <MenuItem 
          value={10} 
        //   sx={{ color: 'goldenrod' }} // Set the text color
        >
          250 gm
        </MenuItem>
        <MenuItem 
          value={20} 
        //   sx={{ color: 'goldenrod' }} // Set the text color
        >
          500 gm
        </MenuItem>
        <MenuItem 
          value={30} 
        //   sx={{ color: 'goldenrod' }} // Set the text color
        >
          750 gm
        </MenuItem>
        <MenuItem 
          value={30} 
        //   sx={{ color: 'goldenrod' }} // Set the text color
        >
          1 kg
        </MenuItem>
      </Select>
    </FormControl>
  );
}
