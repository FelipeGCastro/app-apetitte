import styled from 'styled-components/native'
import { colors } from '~/styles'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
  justify-content: space-around;
  align-items: stretch;
`
export const PageText = styled.Text`
  margin-top: 15px;
  font-size: 40px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';
  text-align: center;+

`
export const FlatListContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const PlaceContainer = styled.FlatList`
`
export const PlaceBox = styled.TouchableOpacity.attrs({
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
export const PlaceImage = styled.Image`
  flex: 1;
  width: 250px;
  maxHeight: 200px;
  border-top-left-radius: 8;
  border-top-right-radius: 8;
`
export const PlaceName = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';
  margin-top: 7px;
`
export const PlaceDays = styled.Text`
  margin-top: 5px;
  font-size: 27px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';

`
export const PlaceHours = styled.Text`
  margin-top: 5px;
  font-size: 22px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';

  margin-bottom: 7px;
`
export const PlaceCheckButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5;
  right: 5;
`

export const FakeButton = styled.View`
  height: 55px;
`
