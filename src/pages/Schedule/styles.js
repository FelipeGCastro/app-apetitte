/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const HeaderContainer = styled.View`
  height: 55px;
  flex-direction: row;
  background: ${colors.blue};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  elevation: 2;
`;
export const HeaderName = styled.Text`
  color: #fff;
  font-size: 30;
  font-family: 'gomarice_usuazi_hosomozi';

`;
export const PackageDays = styled.Text`
  color: #fff;
  font-size: 30;
  font-family: 'gomarice_usuazi_hosomozi';
`;

export const ExpireContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ExpireText = styled.Text`
  color: #fff;
  font-size: 20;
  font-family: 'gomarice_usuazi_hosomozi';
`;
export const ExpireDate = styled.Text`
  color: #fff;
  font-size: 25;
  font-family: 'gomarice_usuazi_hosomozi';
`;

export const ScheduleContainer = styled.FlatList`
  flex:1;
  padding: 20px 10px 40px 10px;
`;
