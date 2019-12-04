import React, { Component } from 'react'
import { Animated, Keyboard } from 'react-native'
import { colors } from '~/styles'

import {
  Container,
  ScrollContainer,
  PageContainer,
  ContainerBody,
  PagePrincipalText,
  NameInput,
  EmailInput,
  PasswordInput,
  LoginButton,
  LoginButtonText,
  SignUpButton,
  SignUpLink
} from './styles'

export default class AccountInfo extends Component {
  state={
    name: '',
    email: '',
    password: null,
    passwordConfirmation: null,
    animation: new Animated.Value(100),
    titleAnimation: new Animated.Value(100)
  }

  componentDidMount = () => {
    this.handleAnimationScreen(0)
  }

  handleAnimationScreen = (toValue) => {
    Animated.stagger(400, [
      Animated.spring(this.state.animation, {
        toValue,
        bounciness: 7
      }),
      Animated.spring(this.state.titleAnimation, {
        toValue,
        bounciness: 7
      })
    ]).start()
  }

  handleNextPagine = () => {
    const { navigation } = this.props
    this.handleAnimationScreen(-100)
    setTimeout(() => {
      navigation.navigate('Place')
    }, 100)
  }

  handleInputChange = (name) => (value) => {
    this.setState({ [name]: value })
  }

  handleLoginPress = () => {
    const { navigation } = this.props
    navigation.navigate('Main')
  }

  handleRightAnimation = (start = 100, out) => ({
    transform: [
      {
        translateX: this.state.animation.interpolate({
          inputRange: [-20, 0, 100],
          outputRange: [out, 0, start]
        })
      }
    ]
  }
  )

  handleTopAnimation = (startValue) => ({
    transform: [
      {
        translateY: this.state.titleAnimation.interpolate({
          inputRange: [0, 100],
          outputRange: [0, startValue]
        })
      }
    ],
    opacity: this.state.titleAnimation.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0]
    })
  })

  render () {
    const { name, email, password, passwordConfirmation } = this.state
    return (
      <Container>
        <ScrollContainer
          keyboardShouldPersistTaps='never'
        >
          <PageContainer>
            <Animated.View
              style={this.handleTopAnimation(-150)}
            >
              <PagePrincipalText>Registo!</PagePrincipalText>
            </Animated.View>
            <ContainerBody>
              <Animated.View
                style={this.handleRightAnimation(100, -100)}
              >
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
              </Animated.View>
              <Animated.View
                style={this.handleRightAnimation(160, -160)}
              >
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
              </Animated.View>
              <Animated.View
                style={this.handleRightAnimation(220, -220)}
              >
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
              </Animated.View>
              <Animated.View
                style={this.handleRightAnimation(280, -280)}
              >
                <PasswordInput
                  ref={(input) => {
                    this.passwordConfirmation = input
                  }}
                  value={passwordConfirmation}
                  onChangeText={this.handleInputChange('passwordConfirmation')}
                  autoCorrect={false}
                  placeholder='Confirmar Palavra-passe'
                  textContentType='password'
                  secureTextEntry
                  returnKeyType='next'
                  onSubmitEditing={() => Keyboard.dismiss()}
                  autoFocus={false}
                  blurOnSubmit={false}
                  placeholderTextColor={colors.softGray}
                />
              </Animated.View>
              <Animated.View
                style={this.handleRightAnimation(340, -340)}
              >
                <LoginButton onPress={this.handleNextPagine}>
                  <LoginButtonText>Prosseguir</LoginButtonText>
                </LoginButton>
              </Animated.View>
            </ContainerBody>
            <Animated.View
              style={this.handleTopAnimation(150)}
            >
              <SignUpButton onPress={this.handleLoginPress}>
                <SignUpLink>Tenho uma Conta</SignUpLink>
              </SignUpButton>
            </Animated.View>
          </PageContainer>
        </ScrollContainer>
      </Container>
    )
  }
}

//
