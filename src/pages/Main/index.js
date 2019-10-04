import React from 'react';

import logo from '~/assets/logo.png'

import {
  Container,
  LogoImage,
  EmailInput,
  PasswordInput,
  LoginButton,
  LoginButtonText,
  LinksContainer,
  ForgotPasswordButton,
  ForgotPasswordText,
  SignUpButton,
  SignUpLink,
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
      <LinksContainer>
        <ForgotPasswordButton>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPasswordButton>
        <SignUpButton>
          <SignUpLink>Me Cadastrar</SignUpLink>
        </SignUpButton>
      </LinksContainer>
    </Container>
)}

export default Main;
//
