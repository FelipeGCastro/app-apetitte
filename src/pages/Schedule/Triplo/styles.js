import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from '~/styles'

export const DayContainer = styled.View`
  justify-content: center;
  align-items: stretch;
  margin-bottom: 10px;
  padding: 10px 0;
  ${(props) => (props.status === 'zero' ? 'background: rgba(255, 255, 255, 0.2)' : null)};
  border-bottom-width: 1;
  border-bottom-color: #fff;
  `

export const HeaderContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const DayName = styled.Text`
  color: #fff;
  font-size: 30;
  font-family: 'Usuazi-Hosomozi';
  align-self: flex-start;
  margin-bottom: 10px;
`
export const DayStatus = styled.View`
  background: ${(props) => (props.status === 'complete'
    ? colors.green : colors.red)};
  position: absolute;
  top: -28.5;
  right: -1;
  padding: 5px;
`
export const StatusText = styled.Text`
  color: #fff;
  font-size: 16;
  font-family: 'Usuazi-Hosomozi';
`

export const DayBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-color: ${(props) => (props.status === 'pending'
    ? colors.red : (props.status === 'complete')
      ? colors.green : colors.white)};
  border-style: solid;
  border-width: 1;
  background: ${colors.background};
  /* flex-wrap: wrap; */
  padding: 10px;
  
`

export const ProductContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ProductBox = styled.TouchableOpacity`
  width: 100%;
  aspect-ratio: 1;
  padding: 15px;
  background: ${colors.background};
  border-width: 2px;
  border-color: #fff;
  border-style: dashed;
  border-radius: 1;
  justify-content: center;
  align-items: center;
  
  
`

export const IconPlus = styled(Icon)`
  padding-bottom: ${((Dimensions.get('window').width / 4) - 40) / 3}px;
  align-self: center;
`

export const AddText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-family: 'Usuazi-Hosomozi';
`

export const ProductName = styled.Text`
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  font-family: 'Usuazi-Hosomozi';
  margin-top: 5px;
  background: ${colors.blue};
  border-radius: 1;
`
