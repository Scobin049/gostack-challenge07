import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import api from '~/services/api';
import { addToCartRequest } from '~/store/modules/cart/actions';

import { Container } from './styles';
import ProductItem from '~/components/ProductItem';

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products');

      // const data = response.data.map(product => ({
      //   ...product,
      //   priceFormatted: formatPrice(product.price),
      // }));

      setProducts(response.data);
    }

    getProducts();
  }, [products]);

  async function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProductItem onClick={() => handleAddProduct(item.id)} data={item} />
        )}
      />
    </Container>
  );
}

export default Home;
