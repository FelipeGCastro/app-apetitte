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
  text-align: center;

`
export const FlatListContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const PointContainer = styled.FlatList`
`
