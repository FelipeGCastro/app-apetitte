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
