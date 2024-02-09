import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BasicMenu from "../elements/BasicMenu"
import { Grid, Box, FormGroup, FormControlLabel, Switch } from "@mui/material";
import { useThemeContext } from '../providers/ThemeProviderWrapper';

const Header = (props) => {
  const { title } = props; 
  const { mode, toggleTheme } = useThemeContext(); 
  const isDarkMode = mode === 'dark';
  return (
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                aria-label="theme switch"
              />
            }
            label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
          />
        </FormGroup>
        <AppBar position="static" sx={{ borderRadius: 2 }}>
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <BasicMenu/>
              </Grid>
              <Grid item xs={8} style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h4" textAlign="center">
                    {title}
                </Typography>
              </Grid>
              <Grid item xs={2}>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Header
