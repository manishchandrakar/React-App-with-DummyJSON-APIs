// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import App from './App'; // Replace with the path to your main component

// Create a theme
const theme = createTheme();

// Use createRoot from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
