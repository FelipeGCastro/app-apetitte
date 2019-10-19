import styled from 'styled-components/native'
import { colors } from '~/styles'

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`
export const FoodListContainer = styled.FlatList`
  padding-top: 20px;
  `

export const FoodContainer = styled.View`
  margin-bottom: 20px;
`
export const FoodCategory = styled.Text`
  color: #fff;
  font-size: 30;
  font-family: 'gomarice_usuazi_hosomozi';
  margin-left: 20px;
  margin-bottom: 10px;
`
export const FoodFlatList = styled.FlatList`
  flex-direction: row;
  /* background: ${colors.blue}; */
`
export const FoodBox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  border: solid 1px #fff;
  width: 192px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background: ${colors.background};
  elevation: 5px;
`
export const FoodImage = styled.Image`
  width: 190px;
  height: 135px;
`
export const FoodName = styled.Text`
  color: #fff;
  font-size: 25;
  font-family: 'gomarice_usuazi_hosomozi';
  margin-top: 7px;
`
export const FoodDescription = styled.Text`
  color: #fff;
  font-size: 18;
  font-family: 'gomarice_usuazi_hosomozi';
  margin: 5px 0 20px 0;
`
export const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 2;
  right: 2;
  align-content: center;
  justify-content: center;
`
