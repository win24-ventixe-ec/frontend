import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { darkTheme, lightTheme } from './theme.jsx';
import App from './App.jsx';
import './index.css';

const useDarkMode = false;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={useDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
