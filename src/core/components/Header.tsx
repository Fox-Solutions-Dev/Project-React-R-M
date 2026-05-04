import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import { ModeSwitcher } from '.';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar component="nav" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Hooks: R&M
          </Typography>
          <ModeSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
