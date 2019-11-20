import React, { Component } from 'react'
import logo from '~/assets/logo.png'
import { colors } from '~/styles'

import {
  Container,
  ContainerBody,
  LogoImage,
  EmailInput,
  PasswordInput,
  LoginButton,
  LoginButtonText,
  LinksContainer,
  ForgotPasswordButton,
  ForgotPasswordText,
  SignUpButton,
  SignUpLink
} from './styles'

export default class Main extends Component {
  state={
    email: '',
    password: null
  }

  handleNextPagine = () => {
    const { navigation } = this.props
    navigation.navigate('Place')
  }

  handleEmailChange = (email) => {
    this.setState({ email })
  }

  handlePasswordChange = (password) => {
    this.setState({ password })
  }

  render () {
    const { email, password } = this.state
    return (
      <Container>
        <ContainerBody>
          <LogoImage source={logo} resizeMode='contain' />
          <EmailInput
            value={email}
            onChangeText={this.handleEmailChange}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='E-mail'
            textContentType='emailAddress'
            returnKeyType='next'
            onSubmitEditing={() => this.password.focus()}
            keyboardType='email-address'
            autoFocus={false}
            blurOnSubmit={false}
            placeholderTextColor={colors.softGray}
          />
          <PasswordInput
            ref={(input) => {
              this.password = input
            }}
            value={password}
            onChangeText={this.handlePasswordChange}
            autoCorrect={false}
            placeholder='Palavra-passe'
            textContentType='password'
            secureTextEntry
            returnKeyType='next'
            onSubmitEditing={() => this.passwordConfirmation.focus()}
            autoFocus={false}
            blurOnSubmit={false}
            placeholderTextColor={colors.softGray}
          />
          <LoginButton onPress={this.handleNextPagine}>
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
        </ContainerBody>
      </Container>
    )
  }
}

//
