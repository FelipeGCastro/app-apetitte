import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { colors } from '~/styles'

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`
export const PageText = styled.Text`
  width: 90%;
  font-size: 35px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';
  text-align: center;

`
export const FlatListContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const FrequencyContainer = styled.FlatList`
`
export const FrequencyBox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  width: ${Dimensions.get('window').width / 1.5}px;
  height: ${Dimensions.get('window').width / 1.24}px;
  border-color: ${(props) => (props.checked ? '#71DFD3' : '#fff')} ;
  border-style: solid;
  border-width: 1px;
  background: ${colors.background};
  align-items: center;
  justify-content: flex-start;
  elevation: 2;
  margin: 0 15px;
  align-self: center;
`
export const FrequencyImage = styled.Image`
  width: 100%;
  height: ${Dimensions.get('window').width / 2}px;
`
export const FrequencyDays = styled.Text`
  margin-top: 5px;
  font-size: 38px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';

`
export const FrequencyDescription = styled.Text`
  margin-top: 5px;
  font-size: 22px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';

  margin-bottom: 7px;
`
export const FrequencyCheckButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5;
  right: 5;
`

export const NextButton = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width / 1.5}px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #71DFD3;

  elevation: 5;
  border-radius: 4;
`
export const NextButtonText = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';

`

export const FakeButton = styled.View`
  height: 40px;
`
export const PointsContainer = styled.View`
  height: 30px;
  background: #FBB01A;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  margin-top: 5px;
  position: absolute;
  bottom: 0;
`

export const PointsText = styled.Text`
  font-size: 17px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';

`
