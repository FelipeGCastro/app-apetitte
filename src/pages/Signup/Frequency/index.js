import React, { Component } from 'react'
import { Animated } from 'react-native'

import coxinha from '~/assets/coxinha.jpg'
import croquete from '~/assets/croquete.jpg'
import paodequeijo from '~/assets/paodequeijo.jpg'

import { Card, ButtonNext } from '~/components'
import {
  Container,
  PageText,
  FlatListContainer,
  FrequencyContainer
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
  }

  componentDidMount = () => {
    Animated.spring(this.state.boxOffset, {
      toValue: 0,
      speed: 3,
      bounciness: 10
    }).start()
  }

  handleCheckPress = (item) => () => {
    const { checked } = this.state
    this.setState({ checked: checked === item.id ? null : item.id })
  }

  handleNextPress = () => {
    const { navigation } = this.props
    navigation.navigate('Menu')
  }

  renderItem= ({ item }) => {
    const { checked } = this.state
    return (
      <Card
        item={item}
        checked={checked === item.id}
        onCheckCard={this.handleCheckPress}
        primaryText={item.days}
        secundaryText={item.description}
      />
    )
  };

  render () {
    const { Frequencys, checked } = this.state
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
        <ButtonNext onPressFunction={this.handleNextPress} checked={checked} />

      </Container>
    )
  }
}
