import styled from 'styled-components/native'
import { Animated } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from '~/styles'

export const ProductContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const DayBox = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-color: ${(props) => (props.status === 'pending'
    ? colors.red : (props.status === 'complete')
      ? colors.green : colors.white)};
  border-style: solid;
  border-width: 1;
  border-radius: 4;
  background-color: ${props => (props.status === 'complete') ? colors.green : colors.background};
  padding: 10px;
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
align-self: center;
`

export const AddText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-family: 'Usuazi-Hosomozi';
`

export const ProductNameContainer = styled.View`
  width: 100%;
  font-family: 'Usuazi-Hosomozi';
  margin-top: 5px;
  padding: 2px;
  background: ${colors.blue};
  border-radius: 4;
`

export const ProductName = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 25px;
  line-height: 30px;
  font-family: 'Usuazi-Hosomozi';
`
