import React, { Component } from 'react'
import { colors } from '~/styles'

import {
  Container,
  ContainerBody,
  NameInput,
  EmailInput,
  PasswordInput,
  LoginButton,
  LoginButtonText,
  LinksContainer,
  SignUpButton,
  SignUpLink
} from './styles'

export default class AccountInfo extends Component {
  state={
    name: '',
    email: '',
    password: null
  }

  handleNextPagine = () => {
    const { navigation } = this.props
    navigation.navigate('Place')
  }

  handleInputChange = (name) => (value) => {
    this.setState({ [name]: value })
  }

  handleLoginPress = () => {
    const { navigation } = this.props
    navigation.navigate('Main')
  }

  render () {
    const { name, email, password } = this.state
    return (
      <Container>
        <ContainerBody>

          <NameInput
            value={name}
            onChangeText={this.handleInputChange('email')}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Nome Completo'
            textContentType='emailAddress'
            returnKeyType='next'
            onSubmitEditing={() => this.password.focus()}
            keyboardType='email-address'
            autoFocus={false}
            blurOnSubmit={false}
            placeholderTextColor={colors.softGray}
          />
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
            onSubmitEditing={() => this.passwordConfirmation.focus()}
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
            placeholder='Confirmar Palavra-passe'
            textContentType='password'
            secureTextEntry
            returnKeyType='next'
            onSubmitEditing={() => this.passwordConfirmation.focus()}
            autoFocus={false}
            blurOnSubmit={false}
            placeholderTextColor={colors.softGray}
          />
          <LoginButton onPress={this.handleNextPagine}>
            <LoginButtonText>Prosseguir</LoginButtonText>
          </LoginButton>
          <LinksContainer>
            <SignUpButton onPress={this.handleLoginPress}>
              <SignUpLink>Tenho uma Conta</SignUpLink>
            </SignUpButton>
          </LinksContainer>
        </ContainerBody>
      </Container>
    )
  }
}

//
