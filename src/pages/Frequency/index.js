import React, { Component } from 'react'
import { Animated } from 'react-native'

import coxinha from '~/assets/coxinha.jpg'
import croquete from '~/assets/croquete.jpg'
import paodequeijo from '~/assets/paodequeijo.jpg'

import ButtonNext from '~/components/ButtonNext'
import {
  Container,
  PageText,
  FlatListContainer,
  FrequencyContainer,
  FrequencyBox,
  FrequencyImage,
  FrequencyDays,
  FrequencyDescription
} from './styles'

export default class Frequency extends Component {
  state = {
    Frequencys: [
      {
        id: 1,
        image: coxinha,
        days: '8 Dias',
        description: '( 2 vezes por semana )',
        points: 10
      },
      {
        id: 2,
        image: croquete,
        days: '12 Dias',
        description: '( 3 vezes por semana )',
        points: 30
      },
      {
        id: 3,
        image: paodequeijo,
        days: '20 Dias',
        description: '( 5 vezes por semana )',
        points: 50
      }
    ],
    animation: new Animated.Value(100),
    boxOffset: new Animated.Value(50),
    checked: null
  };

  componentDidMount = () => {
    Animated.spring(this.state.boxOffset, {
      toValue: 0,
      speed: 3,
      bounciness: 10
    }).start()
  }

  handleCheckPress = (item) => () => {
    const { checked } = this.state
    this.setState({ checked: checked === item.id ? null : item.id }, () => {
      const finalValue = this.state.checked ? 0 : 100
      Animated.spring(this.state.animation, {
        toValue: finalValue,
        bounciness: 10
      }).start()
    })
  }

  handleNextPress = () => {
    const { navigation } = this.props
    navigation.navigate('Menu')
  }

  renderItem= ({ item }) => {
    const { checked } = this.state
    return (
      <FrequencyBox
        onPress={this.handleCheckPress(item)}
        checked={checked === item.id ? true : null}
      >
        <FrequencyImage source={item.image} resizeMode='cover' />
        <FrequencyDays>{item.days}</FrequencyDays>
        <FrequencyDescription>{item.description}</FrequencyDescription>
      </FrequencyBox>
    )
  };

  render () {
    const { Frequencys } = this.state
    return (
      <Container>
        <PageText>Agora vamos escolher a frequência.</PageText>
        <FlatListContainer>
          <Animated.View style={{
            transform: [
              { translateX: this.state.boxOffset }
            ]
          }}
          >
            <FrequencyContainer
              data={Frequencys}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(frequency) => frequency.id.toString()}
              renderItem={this.renderItem}
            />
          </Animated.View>

        </FlatListContainer>
        <Animated.View style={{
          transform: [
            { translateY: this.state.animation }
          ]
        }}
        >
          <ButtonNext onPressFunction={this.handleNextPress} />
        </Animated.View>

      </Container>
    )
  }
}
