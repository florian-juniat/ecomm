import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import Product from './Product/Product';
import useStyles from './styles';
import axios from 'axios';
import Button from '@material-ui/core/Button';



const Products = ({ products, onAddToCart, token }) => {
  const classes = useStyles();
  const history = useHistory();


  const [productt, setProduct] = useState([])
  const [loadProduct, setLoadProduct] = useState(false)

  if (!products.length) return <p>Loading...</p>;

  if (token == "") {
    history.push('/ecomm/signin')
    
  }

  /*
axios.get('https://back-ecommerce01.herokuapp.com/home/courses', {
      headers: {
        'Authorization': token
      }}).then(res => {
          setProducts(res)
          console.log("=========== Products ===========")
          console.log(products)
    }).catch(function (error) {
      console.log("=======> problem get products")
    });
  */

    if (loadProduct == false) {
      axios.get('https://back-ecommerce01.herokuapp.com/home/courses', {
      headers: {
        'Authorization': token
      }}).then(res => {
          setProduct(res.data)
      }).catch(function (error) {
        console.log("=======> problem get products")
      });
      setLoadProduct(true)
    }
  

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>

        {productt.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

