import React, { Component } from 'react'
import { ScrollView } from 'react-native'
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
    navigation.navigate('Menu')
  }

  handleInputChange = (name) => (value) => {
    this.setState({ [name]: value })
  }

  handleSignupPress = () => {
    const { navigation } = this.props
    navigation.navigate('SignupPages')
  }

  render () {
    const { email, password } = this.state
    return (
      <Container>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps='handled'
        >
          <ContainerBody>
            <LogoImage source={logo} resizeMode='contain' />
            <EmailInput
              value={email}
              onChangeText={this.handleInputChange('email')}
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
              onChangeText={this.handleInputChange('password')}
              autoCorrect={false}
              placeholder='Palavra-passe'
              textContentType='password'
              secureTextEntry
              returnKeyType='next'
              onSubmitEditing={this.handleSignupPress}
              autoFocus={false}
              blurOnSubmit={false}
              placeholderTextColor={colors.softGray}
            />
            <LoginButton onPress={this.handleNextPagine}>
              <LoginButtonText>Entrar</LoginButtonText>
            </LoginButton>
            <LinksContainer>
              <ForgotPasswordButton>
                <ForgotPasswordText>Esqueci senha</ForgotPasswordText>
              </ForgotPasswordButton>
              <SignUpButton onPress={this.handleSignupPress}>
                <SignUpLink>Me Cadastrar</SignUpLink>
              </SignUpButton>
            </LinksContainer>
          </ContainerBody>
        </ScrollView>
      </Container>
    )
  }
}

//
