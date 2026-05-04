'use client';

import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import { Flare, DarkMode } from '@mui/icons-material';

const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              icon={<Flare />}
              checkedIcon={<DarkMode />}
              checked={mode === 'dark'}
              onChange={(event) => {
                setMode(event.target.checked ? 'dark' : 'light');
              }}
            />
          }
          label="Mode"
        />
      </FormGroup>
    </>
  );
};

export default ModeSwitcher;
