import { useContext } from 'react';
import ThemeContext from './ThemeContextObj';

// This hook is a wrapper around the context to avoid Fast Refresh errors
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
