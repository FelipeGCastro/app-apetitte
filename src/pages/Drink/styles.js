import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;
export const DrinkListContainer = styled.FlatList`
`;

export const DrinkContainer = styled.View`
  margin-top: 20px;
`;
export const DrinkCategory = styled.Text`
  color: #fff;
  font-size: 30;
  font-family: 'gomarice_usuazi_hosomozi';
  /* text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3); */;
  margin-left: 20px;
  margin-bottom: 10px;
`;
export const DrinkFlatList = styled.FlatList`
  flex-direction: row;
  /* background: ${colors.blue}; */
`;
export const DrinkBox = styled.View`
  border: solid 1px #fff;
  width: 192px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background: ${colors.background};
  elevation: 5px;
`;
export const DrinkImage = styled.Image`
  width: 190px;
  height: ${190 / 1.4}px;
`;
export const DrinkName = styled.Text`
  color: #fff;
  font-size: 25;
  font-family: 'gomarice_usuazi_hosomozi';
  /* text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3); */;
  margin-top: 7px;
`;
export const DrinkDescription = styled.Text`
  color: #fff;
  font-size: 18;
  font-family: 'gomarice_usuazi_hosomozi';
  /* text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3); */;
  margin: 7px 0 15px 0;
`;
export const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5;
  right: 5;
`;
