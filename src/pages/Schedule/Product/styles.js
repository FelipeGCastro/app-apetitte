/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '~/styles';

export const ProductContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const ProductBox = styled.TouchableOpacity`
  background: ${colors.background};
  width: ${(Dimensions.get('window').width / 3) - 40}px;
  height: ${(Dimensions.get('window').width / 3) - 40}px;
  border-width: 2px;
  border-color: #fff;
  border-style: dashed;
  border-radius: 1;
  justify-content: center;
  align-items: center;
`;
export const ProductImageBox = styled.View`
  background: ${colors.background};
  width: ${(Dimensions.get('window').width / 3) - 40}px;
  height: ${(Dimensions.get('window').width / 3) - 40}px;
  border-width: 2px;
  border-color: #fff;
  border-style: dashed;
  border-radius: 1;
  justify-content: center;
  align-items: center;
`;
export const IconClose = styled(Icon)`
  border-radius: 15px;
  background: #fff;
`;

export const ProductRemove = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  right: -15;
  top: -15;
  z-index: 5;
  elevation: 2;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 1;
`;
export const ProductName = styled.Text`
  color: #fff;
  width: ${(Dimensions.get('window').width / 4)}px;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  font-family: 'gomarice_usuazi_hosomozi';
  margin-top: 5px;
  background: ${colors.blue};
  border-radius: 4;
`;
