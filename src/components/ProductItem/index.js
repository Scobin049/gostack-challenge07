import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { formatPrice } from '~/util/format';

import {
  Product,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

export default function ProductItem({ data, onClick }) {
  const amount = useSelector(state => state.cart);

  const priceFormatted = useMemo(() => {
    return formatPrice(data.price);
  }, [data.price]);

  return (
    <Product>
      <ProductImage source={{ uri: data.image }} />
      <ProductInfo>
        <ProductTitle>{data.title}</ProductTitle>
        <ProductPrice>{priceFormatted}</ProductPrice>
        <AddButton onPress={onClick}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{amount || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </ProductInfo>
    </Product>
  );
}

ProductItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
