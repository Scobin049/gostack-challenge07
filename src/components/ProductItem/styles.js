import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  flex-direction: row;
  align-items: flex-start;
`;

export const ProductImage = styled.Image`
  height: 120px;
  width: 120px;
  margin-right: 10px;
`;

export const ProductInfo = styled.View`
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  flex-wrap: wrap;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
  justify-content: center;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;

  font-weight: bold;
  color: #fff;
`;
