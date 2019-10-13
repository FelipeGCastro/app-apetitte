import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


export const NextButton = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width / 1.5}px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: #71DFD3;
  elevation: 2;
  border-radius: 8;
`;
export const NextButtonText = styled.Text`
  font-size: 25px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';

`;
