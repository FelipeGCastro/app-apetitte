import React from 'react';

import logo from '~/assets/logo.png'

import {
  Container,
  LogoImage,
  EmailInput,
  PasswordInput,
  LoginButton,
  LoginButtonText,
} from './styles';

const Main = ({ navigation }) => {
  function nextPagine() {
    navigation.navigate('Place')
  }
  return (
    <Container>
      <LogoImage source={logo} resizeMode="contain" />
      <EmailInput />
      <PasswordInput />
      <LoginButton onPress={nextPagine}>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>
    </Container>
)}

export default Main;
//
