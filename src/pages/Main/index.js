import React, { Component } from 'react';
import logo from '~/assets/logo.png';
import { colors } from '~/styles';

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

export default class Main extends Component {
  state={
    email: '',
    password: null,
  }

  nextPagine = () => {
    const { navigation } = this.props
    navigation.navigate('Place')
  }

  handleEmailChange = (email) => {
    this.setState({ email })
  }

  handlePasswordChange = (password) => {
    this.setState({ password })
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <LogoImage source={logo} resizeMode="contain" />
        <EmailInput
          value={email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="words"
          autoCorrect={false}
          placeholder="E-mail"
          textContentType="emailAddress"
          returnKeyType="next"
          onSubmitEditing={() => this.password.focus()}
          keyboardType="email-address"
          autoFocus={false}
          blurOnSubmit={false}
          placeholderTextColor={colors.softGray}
        />
        <PasswordInput
          ref={(input) => {
            this.password = input;
          }}
          value={password}
          onChangeText={this.handlePasswordChange}
          autoCorrect={false}
          placeholder="Palavra-passe"
          textContentType="password"
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={() => this.passwordConfirmation.focus()}
          autoFocus={false}
          blurOnSubmit={false}
          placeholderTextColor={colors.softGray}
        />
        <LoginButton onPress={this.nextPagine}>
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
    );
  }
}

//
