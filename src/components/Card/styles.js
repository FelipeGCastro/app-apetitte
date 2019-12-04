import styled from 'styled-components/native'
import { colors } from '~/styles'

export const CardBox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  width: 256px;
  border-color: ${(props) => (props.checked ? '#71DFD3' : '#fff')} ;
  border-style: solid;
  border-width: 3px;
  background: ${(props) => (props.checked ? '#71DFD3' : colors.background)};
  align-items: center;
  justify-content: flex-start;
  elevation: 2;
  margin: 0 15px;
  padding-bottom: 10px;
  align-self: center;
  border-radius: 8;
`
export const CardImage = styled.Image`
  flex: 1;
  width: 250px;
  maxHeight: 200px;
  border-top-left-radius: 8;
  border-top-right-radius: 8;
`
export const CardPrimaryText = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';
  margin-top: 7px;
`
export const CardSecundaryText = styled.Text`
  margin-top: 5px;
  font-size: 27px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';

`
export const CardThirdText = styled.Text`
  margin-top: 5px;
  font-size: 22px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';

  margin-bottom: 7px;
`
