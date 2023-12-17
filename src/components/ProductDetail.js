// ProductDetail.js
import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/api';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchData(`/products/${match.params.id}`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError('An error occurred while fetching the data.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [match.params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductDetail;
