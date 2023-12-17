// Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../utils/api';
import { Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { styled, useTheme } from '@mui/system';

const StyledContainer = styled(Container)({
  marginTop: theme => theme.spacing(5),
});

const StyledJumbotron = styled('div')({
  backgroundColor: theme => theme.palette.background.paper,
  padding: theme => theme.spacing(4),
  textAlign: 'center',
});

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Home = () => {
  const [categories, setCategories] = useState([]);
  const theme = useTheme(); // Add this line to use the theme

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchData('/products/categories');
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <StyledContainer>
      <StyledJumbotron>
        <Typography variant="h1" component="h1" gutterBottom style={{ fontFamily: 'Poppins, sans-serif' }}>
          Welcome to Our Online Store
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Discover a wide range of high-quality products.
        </Typography>
        <hr />

        <Typography variant="body1" gutterBottom>
          Explore our categories:
        </Typography>

        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid key={category} item xs={12} md={4}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {category}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Find the best {category} products in our store.
                  </Typography>
                  <Button component={Link} to={`/products/category/${category}`} variant="contained" color="primary">
                    View Products
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledJumbotron>
    </StyledContainer>
  );
};

export default Home;
