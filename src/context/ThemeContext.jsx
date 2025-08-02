import { useState, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeContext from './ThemeContextObj';

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
<<<<<<< HEAD
        main: '#9C27B0',
        contrastText: '#ffffff',
      },
      secondary: {
        main: darkMode ? '#BA68C8' : '#7B1FA2',
=======
        main: '#CCDC28',
        contrastText: '#000000',
      },
      secondary: {
        main: darkMode ? '#CCDC28' : '#1976d2',
>>>>>>> 1f2ff0a95b41cdcb6f93549fa0670e7bf7540bd9
      },
      background: {
        default: darkMode ? '#121212' : '#ffffff',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
<<<<<<< HEAD
            backgroundColor: '#9C27B0',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#7B1FA2',
=======
            backgroundColor: '#CCDC28',
            color: '#000000',
            '&:hover': {
              backgroundColor: '#b8c424',
>>>>>>> 1f2ff0a95b41cdcb6f93549fa0670e7bf7540bd9
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
<<<<<<< HEAD
            backgroundColor: darkMode ? '#1e1e1e' : '#9C27B0',
            color: '#ffffff',
=======
            backgroundColor: darkMode ? '#1e1e1e' : '#CCDC28',
            color: darkMode ? '#ffffff' : '#000000',
>>>>>>> 1f2ff0a95b41cdcb6f93549fa0670e7bf7540bd9
          },
        },
      },
    },
  });

  const value = {
    darkMode,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={value}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};