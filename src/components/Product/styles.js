/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from '~/styles'

export const ProductContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ProductBox = styled.TouchableOpacity`
  width: 100%;
  aspect-ratio: 1;
  background: ${colors.background};
  border-width: 2px;
  border-color: #fff;
  border-style: dashed;
  border-radius: 1;
  justify-content: center;
  align-items: center;
`
export const ProductImageBox = styled.View`
  background: ${colors.background};
  width: 100%;
  aspect-ratio: 1;
  border-width: 2px;
  border-color: #fff;
  border-style: dashed;
  border-radius: 1;
  justify-content: center;
  align-items: center;
`
export const IconClose = styled(Icon)`
  justify-content: center;
`

export const ProductRemove = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  position: absolute;
  right: -10;
  top: -10;
  z-index: 5;
  elevation: 2;
  border-radius: 15px;
  background: #fff;
  align-items: center;
  justify-content: center;
`

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 1;
`
export const ProductNameContainer = styled.View`
  width: 100%;
  font-family: 'Usuazi-Hosomozi';
  margin-top: 5px;
  padding: 2px;
  background: ${colors.blue};
  border-radius: 4;
`

export const ProductName = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 25px;
  line-height: 30px;
  font-family: 'Usuazi-Hosomozi';
`
