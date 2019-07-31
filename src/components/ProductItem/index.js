import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';

import {
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

export default function ProductItem({ data, onClick }) {
  const amount = useSelector(state => state.cart);

  return (
    <Product>
      <ProductImage source={{ uri: data.image }} />
      <ProductTitle>{data.title}</ProductTitle>
      <ProductPrice>{data.priceFormatted}</ProductPrice>
      <AddButton onPress={onClick}>
        <ProductAmount>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          <ProductAmountText>{amount || 0}</ProductAmountText>
        </ProductAmount>
        <AddButtonText>ADICIONAR</AddButtonText>
      </AddButton>
    </Product>
  );
}

ProductItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    priceFormatted: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
