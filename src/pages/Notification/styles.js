import styled from 'styled-components/native'
import { colors } from '~/styles'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
`
export const HeaderContainer = styled.View`
height: 55px;
flex-direction: row;
background: ${colors.blue};
justify-content: center;
align-items: center;
padding: 0 10px;
elevation: 2;
`
export const HeaderName = styled.Text`
color: #fff;
font-size: 35;
font-family: 'Usuazi-Hosomozi';
`
export const AlertContainer = styled.View`
flex: 1;
justify-content: flex-start;
align-items: center;
padding: 10px;
`

export const AlertBox = styled.View`
background-color: rgba(0, 0, 0, 0.2);
border-width: 1px;
border-color: #fff;
border-style: solid;
border-radius: 1;
justify-content: center;
align-items: center;
padding: 10px;
`
export const AlertText = styled.Text`
color: #fff;
font-size: 30;
font-family: 'Usuazi-Hosomozi';
text-align: center;
line-height: 35;
`
