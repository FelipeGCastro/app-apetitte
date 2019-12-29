import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from '~/styles'

export const DayContainer = styled.View`
  justify-content: center;
  align-items: stretch;
  margin-top: 10px;
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
  padding: 10px 0 ;
  margin-bottom: 15px;
`

export const DayName = styled.Text`
  color: #fff;
  font-size: 30;
  font-family: 'Usuazi-Hosomozi';
`
export const DayStatus = styled.View`
  background: ${(props) => (props.status === 'complete'
    ? colors.green : colors.red)};
  position: absolute;
  top: -28.5;
  right: -1;
  padding: 5px;
`

export const LabelStatusContainer = styled.View`
  display: ${(props) => ((props.status !== 'pending' && props.status !== 'complete') ? 'none' : 'flex')};
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: ${(props) => (props.status === 'pending'
    ? colors.red : (props.status === 'complete')
      ? colors.green : colors.white)};
`
export const StatusText = styled.Text`
  color: #fff;
  font-size: 16;
  font-family: 'Usuazi-Hosomozi';
`
export const IconPlus = styled(Icon)`
align-self: center;
`
