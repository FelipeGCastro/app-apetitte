import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { colors } from '~/styles'

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  align-items: center;
`
export const LogoImage = styled.Image`
  width: 250px;
`
export const EmailInput = styled.TextInput`
  width: ${Dimensions.get('window').width / 1.4};
  height: 40px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 0 15px;
  elevation: 2;
  color: ${colors.textSecundary};
  font-size: 18;
`
export const PasswordInput = styled.TextInput`
  width: ${Dimensions.get('window').width / 1.4};
  height: 40px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 15px;
  padding: 0 15px;
  elevation: 2;
  color: ${colors.softGray};
  font-size: 18;
`

export const LoginButton = styled.TouchableOpacity`
   width: ${Dimensions.get('window').width / 1.4};
  height: 40px;
  background: ${colors.blue};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 30px;
  elevation: 2;
`
export const LoginButtonText = styled.Text`
  font-size: 28px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';
`

export const LinksContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ForgotPasswordButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  /* background: ${colors.blue}; */
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  /* elevation: 2; */
  /* padding: 10px; */
  margin-right: 20px;
`
export const ForgotPasswordText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';
`
export const SignUpButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  /* background: ${colors.blue}; */
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  /* elevation: 2; */
  padding: 10px;
`
export const SignUpLink = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'gomarice_usuazi_hosomozi';
`
