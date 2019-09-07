/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const HeaderContainer = styled.View`
  height: 55px;
  flex-direction: row;
  background: ${colors.blue};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  elevation: 5;
`;
export const HeaderName = styled.Text`
  color: #fff;
  font-size: 30;
  font-family: 'gomarice_usuazi_hosomozi';

`;
export const PackageDays = styled.Text`
  color: #fff;
  font-size: 30;
  font-family: 'gomarice_usuazi_hosomozi';
`;
export const Points = styled.Text`
  color: #fff;
  font-size: 20;
  font-family: 'gomarice_usuazi_hosomozi';

`;

export const ScheduleContainer = styled.FlatList`
  flex:1;
  padding: 20px 10px;
`;
export const DayContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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
  elevation: 5;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 1;
`;

export const IconPlus = styled(Icon)`
  padding-bottom: ${((Dimensions.get('window').width / 4) - 40) / 3}px;
  align-self: center;
`;

export const ProductExtraBox = styled.TouchableOpacity`
  background: ${colors.background};
  width: ${(Dimensions.get('window').width / 4) - 40}px;
  height: ${(Dimensions.get('window').width / 4) - 40}px;
  border-width: 2px;
  border-color: #FFD277;
  border-style: dashed;
  border-radius: 1;
  justify-content: center;
  align-items: center;
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
`;
export const ExtraText = styled.Text`
  color: #FFD277;
  font-size: 24;
  font-family: 'gomarice_usuazi_hosomozi';
  margin-top: 5px;
`;

export const ProductExtraName = styled.Text`
  color: #FFD277;
  font-size: 14;
  font-family: 'gomarice_usuazi_hosomozi';
  margin-top: 5px;
`;


