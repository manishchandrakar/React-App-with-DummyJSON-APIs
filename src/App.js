// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

// Footer component
const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', marginTop: '50px', paddingBottom: '20px' }}>
      <p>Designed and Developed by <b>Manish Chandrakar</b></p>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <Navbar /><br/><br/><br/><br/><br/><br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/category/:category_name" element={<ProductList />} />
      </Routes>
      <Footer /> {/* Include the Footer component at the bottom */}
    </Router>
  );
}

export default App;
