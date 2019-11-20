/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native'
import { colors } from '~/styles'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
  align-items: stretch;
`

export const HeaderContainer = styled.View`
  height: 55px;
  flex-direction: row;
  background: ${colors.blue};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  elevation: 2;
`
export const HeaderName = styled.Text`
  color: #fff;
  font-size: 35;
  font-family: 'Usuazi-Hosomozi';

`
export const PackageDays = styled.Text`
  color: #fff;
  font-size: 35;
  font-family: 'Usuazi-Hosomozi';
`

export const ExpireContainer = styled.View`
  justify-content: center;
  align-items: center;
`

export const ExpireText = styled.Text`
  color: #fff;
  font-size: 24;
  font-family: 'Usuazi-Hosomozi';
`
export const ExpireDate = styled.Text`
  color: #fff;
  font-size: 25;
  font-family: 'Usuazi-Hosomozi';
`

export const ScheduleContainer = styled.FlatList`
  flex-grow: 1;
  padding: 30px 10px 40px;
`
