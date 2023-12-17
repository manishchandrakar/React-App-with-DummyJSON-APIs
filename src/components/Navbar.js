// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './CSS/Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6">Your Logo or Brand</Typography>
        </Link>

        <div style={{ flexGrow: 1 }}></div>

        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
          <Typography variant="h6">Home</Typography>
        </Link>
        <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6">Products</Typography>
        </Link>
        {/* Add more navigation items as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
