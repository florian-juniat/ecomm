import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart, token }) => {
  const classes = useStyles();
  const history = useHistory();

  if (!products.length) return <p>Loading...</p>;

  if (token == "") {
    history.push('/signin')
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

