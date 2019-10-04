import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '~/styles';

export const Container = styled.View`

`;
export const DayContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  ${(props) => (props.status === 'zero' ? 'background: rgba(255, 255, 255, 0.2)' : null)};
`;
export const TriploContainer = styled.View`
  flex-direction: row;
`;
export const DayName = styled.Text`
  color: #fff;
  font-size: 24;
  font-family: 'gomarice_usuazi_hosomozi';
  align-self: flex-start;
  margin-bottom: 10px;
`;
export const DayStatus = styled.View`
  background: ${(props) => (props.status === 'complete'
    ? colors.green : colors.red)};
  position: absolute;
  top: -28.5;
  right: -1;
  padding: 5px;
`;
export const StatusText = styled.Text`
  color: #fff;
  font-size: 16;
  font-family: 'gomarice_usuazi_hosomozi';
`;

export const DayBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border-color: ${(props) => (props.status === 'pending'
    ? colors.red : (props.status === 'complete')
      ? colors.green : colors.white)};
  border-style: solid;
  border-width: 1;
  width: 100%;
  background: ${colors.background};
  /* flex-wrap: wrap; */
  padding: 15px 15px 0 15px;
`;


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


export const IconPlus = styled(Icon)`
  padding-bottom: ${((Dimensions.get('window').width / 4) - 40) / 3}px;
  align-self: center;
`;

export const AddText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-family: 'gomarice_usuazi_hosomozi';
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
