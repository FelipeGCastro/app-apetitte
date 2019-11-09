import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { colors } from '~/styles'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
  justify-content: space-around;
  align-items: stretch;
  padding: 10px 0;
`
export const PageText = styled.Text`
  margin-top: 15px;
  font-size: 37px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';
  text-align: center;
  padding: 0 20px;

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
  width: 256px;
  border-color: ${(props) => (props.checked ? '#71DFD3' : '#fff')} ;
  border-style: solid;
  border-width: 3px;
  background: ${colors.background};
  align-items: center;
  justify-content: flex-start;
  elevation: 2;
  margin: 0 15px;
  padding-bottom: 10px;
  align-self: center;
  border-radius: 8;
`
export const FrequencyImage = styled.Image`
  flex: 1;
  width: 250px;
  maxHeight: 200px;
  border-top-left-radius: 8;
  border-top-right-radius: 8;
`
export const FrequencyDays = styled.Text`
  margin-top: 5px;
  font-size: 38px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';

`
export const FrequencyDescription = styled.Text`
  margin-top: 5px;
  font-size: 27px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';

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

export const FakeButton = styled.View`
  height: 40px;
`
