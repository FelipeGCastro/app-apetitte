import React, { Component } from 'react'
import { Animated } from 'react-native'
import {
  Container,
  PageText,
  FlatListContainer,
  PointContainer
} from './styles'

import colombo from '~/assets/colombo.jpg'
import atrium from '~/assets/atrium-saldanha.jpg'
import { Card, ButtonNext } from '~/components'

export default class Point extends Component {
  state = {
    places: [
      {
        id: 1,
        image: colombo,
        name: 'Torre Ocidente',
        days: 'Torre Ocidente'
      },
      {
        id: 2,
        image: atrium,
        name: 'Torre Oriente',
        days: 'Torre Oriente'
      },
      {
        id: 3,
        image: atrium,
        name: 'Dentro do Centro Comercial',
        days: 'Segunda a Sexta'
      }
    ],
    animation: new Animated.Value(-150),
    boxOffset: new Animated.Value(100),
    checked: null
  }

  componentDidMount = () => {
    Animated.parallel([
      Animated.spring(this.state.animation, {
        toValue: 0,
        speed: 1,
        bounciness: 7
      }),
      Animated.spring(this.state.boxOffset, {
        toValue: 0,
        speed: 1,
        bounciness: 7
      })

    ]).start()
  }

  handleCheckPoint = (item) => () => {
    const { checked } = this.state
    this.setState({ checked: checked === item.id ? null : item.id })
  }

  handleNextPress = () => {
    const { navigation } = this.props
    navigation.navigate('Frequency')
  }

  renderItem= ({ item }) => {
    const { checked } = this.state
    return (
      <Card
        item={item}
        checked={checked === item.id}
        onCheckCard={this.handleCheckPoint}
        primaryText={item.name}
        secundaryText={item.days}
      />
    )
  };

  render () {
    const { checked, places } = this.state
    return (
      <Container>
        <Animated.View
          style={{
            transform: [
              { translateY: this.state.animation }
            ]
          }}
        >
          <PageText>Vamos decidir o Point a ser entregado</PageText>
        </Animated.View>
        <FlatListContainer>
          <Animated.View style={{
            transform: [
              { translateX: this.state.boxOffset }
            ]
          }}
          >
            <PointContainer
              data={places}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(place) => place.id.toString()}
              renderItem={this.renderItem}
            />
          </Animated.View>
        </FlatListContainer>

        <ButtonNext onPressFunction={this.handleNextPress} checked={checked} />
      </Container>
    )
  }
}
