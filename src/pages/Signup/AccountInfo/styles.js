import styled from 'styled-components/native'
import { colors } from '~/styles'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  align-items: stretch;
  background: ${colors.background};
`
export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1
  }
})`
`
export const PageContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: stretch;
  
`
export const ContainerBody = styled.View`
  background: ${colors.background};
  justify-content: space-around;
  align-items: stretch;
  padding: 10px 20px;
`
export const PagePrincipalText = styled.Text`
  align-self: center;
  font-size: 35px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';
  margin-top: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.6);
`

export const LogoImage = styled.Image`
  align-self: center;
  width: 250px;
`
export const SignUpInput = styled.TextInput`
  height: 50px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 0 15px;
  elevation: 3;
  color: ${colors.textSecundary};
  font-size: 16;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`

export const LoginButton = styled.TouchableOpacity`
  height: 50px;
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 30px;
  elevation: 3;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`
export const LoginButtonText = styled.Text`
  margin-top: 3px;
  font-size: 35px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';
  
`

export const SignUpButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  /* background: ${colors.blue}; */
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  /* elevation: 3; */
  padding: 10px;
`
export const SignUpLink = styled.Text`
  font-size: 26px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.6);
`
