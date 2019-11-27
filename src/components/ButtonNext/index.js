import React, { Component } from 'react'
import { Animated } from 'react-native'

import { NextButton, NextButtonText } from './styles'

export default class ButtonNext extends Component {
  state = {
    animation: new Animated.Value(100)
  };

  componentDidUpdate = () => {
    const { checked } = this.props
    const finalValue = checked ? 0 : 100
    Animated.spring(this.state.animation, {
      toValue: finalValue,
      bounciness: 10
    }).start()
  }

  render () {
    const { onPressFunction } = this.props

    return (
      <Animated.View style={{
        transform: [
          { translateY: this.state.animation }
        ]
      }}
      >
        <NextButton onPress={onPressFunction}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      </Animated.View>
    )
  }
}
