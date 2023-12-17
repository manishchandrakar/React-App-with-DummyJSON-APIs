// ProductList.js
import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { fetchData } from '../utils/api';

const ProductCard = styled(Card)({
  maxWidth: 345,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData('/products');
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('An error occurred while fetching the data.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ fontFamily: 'Poppins, sans-serif' }}>
        Product List
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body1">{product.description}</Typography>
                <Typography variant="body2">${product.price}</Typography>
              </CardContent>
              <div style={{ padding: '10px', borderTop: '1px solid #eee', marginTop: 'auto' }}>
                {/* Additional product information can be added here */}
              </div>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
