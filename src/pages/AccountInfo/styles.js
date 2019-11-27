import styled from 'styled-components/native'
import { colors } from '~/styles'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  align-items: stretch;
`
export const ContainerBody = styled.View`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  align-items: stretch;
  padding: 10px 20px;
`
export const LogoImage = styled.Image`
  align-self: center;
  width: 250px;
`
export const NameInput = styled.TextInput`
  height: 60px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 0 15px;
  elevation: 3;
  color: ${colors.textSecundary};
  font-size: 18;
`
export const EmailInput = styled.TextInput`
  height: 60px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 0 15px;
  elevation: 3;
  color: ${colors.textSecundary};
  font-size: 18;
`
export const PasswordInput = styled.TextInput`
  height: 60px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 0 15px;
  elevation: 3;
  color: ${colors.textSecundary};
  font-size: 18;
`

export const LoginButton = styled.TouchableOpacity`
  height: 60px;
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 30px;
  elevation: 3;
`
export const LoginButtonText = styled.Text`
  font-size: 40px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';
`

export const LinksContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  font-size: 25px;
  color: #fff;
  font-family: 'Usuazi-Hosomozi';
`
