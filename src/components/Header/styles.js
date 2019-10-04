import styled from 'styled-components/native';
import { colors } from '~/styles';

export const HeaderContainer = styled.View`
height: 55px;
flex-direction: row;
background: ${colors.blue};
justify-content: flex-start;
align-items: center;
padding: 0 10px;
elevation: 2;
`;
export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacite: 0.7,
})``;

export const HeaderName = styled.Text`
color: #fff;
font-size: 30;
font-family: 'gomarice_usuazi_hosomozi';
/* text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3); */;
margin-left: 20px;
`;
