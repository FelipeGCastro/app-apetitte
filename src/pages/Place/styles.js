import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #74AAE4;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;
export const PageText = styled.Text`
  width: 90%;
  font-size: 35px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';
  text-align: center;

`;
export const FlatListContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const PlaceContainer = styled.FlatList`
`
export const PlaceBox = styled.View`
  width: ${Dimensions.get('window').width / 1.5}px;
  height: ${Dimensions.get('window').width / 1.24}px;
  border-color: ${(props) => (props.checked ? '#71DFD3' : '#fff')} ;
  border-style: solid;
  border-width: 1px;
  background: #74AAE4;
  align-items: center;
  justify-content: flex-start;
  elevation: 2;
  margin: 0 15px;
  align-self: center;
`;
export const PlaceImage = styled.Image`
  width: 100%;
  height: ${Dimensions.get('window').width / 2}px;
`;
export const PlaceName = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';

  margin-top: 7px;
`;
export const PlaceDays = styled.Text`
  margin-top: 5px;
  font-size: 22px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';

`;
export const PlaceHours = styled.Text`
  margin-top: 5px;
  font-size: 22px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';

  margin-bottom: 7px;
`;
export const PlaceCheckButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5;
  right: 5;
`;

export const NextButton = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width / 1.5}px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #71DFD3;
  elevation: 2;
`;
export const NextButtonText = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';

`;

export const FakeButton = styled.View`
  height: 50px;
`;
