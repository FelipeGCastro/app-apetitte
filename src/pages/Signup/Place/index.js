import React, { Component } from 'react'
import { Animated } from 'react-native'

import colombo from '~/assets/colombo.jpg'
import atrium from '~/assets/atrium-saldanha.jpg'
import { ButtonNext, Card } from '~/components'
import {
  Container,
  PageText,
  FlatListContainer,
  PlaceContainer
} from './styles'

export default class Place extends Component {
  state = {
    places: [
      {
        id: 1,
        image: colombo,
        name: 'Colombo',
        days: 'Segunda, Quarta e Sexta',
        hours: '9h e 16h'
      },
      {
        id: 2,
        image: atrium,
        name: 'Atrium Saldanha',
        days: 'Terça, Quinta e Sexta',
        hours: '10h e 15h'
      },
      {
        id: 3,
        image: atrium,
        name: 'AlfraPark',
        days: 'Segunda a Sexta',
        hours: '10h e 15h'
      }
    ],
    animation: new Animated.Value(-150),
    boxOffset: new Animated.Value(100),
    checked: null
  };

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

  handleCheckPlace = (item) => () => {
    const { checked } = this.state
    this.setState({ checked: checked === item.id ? null : item.id })
  }

  handleNextPress = () => {
    const { navigation } = this.props
    navigation.navigate('Point')
  }

  renderItem= ({ item }) => {
    const { checked } = this.state
    return (
      <Card
        item={item}
        onCheckCard={this.handleCheckPlace}
        primaryText={item.name}
        secundaryText={item.days}
        thirdText={item.hours}
        checked={checked === item.id}
      />
    )
  };

  render () {
    const { places, checked } = this.state
    return (
      <Container>
        <Animated.View
          style={{
            transform: [
              { translateY: this.state.animation }
            ]
          }}
        >
          <PageText>Primeiro Vamos decidir o lugar para sua entrega</PageText>
        </Animated.View>
        <FlatListContainer>
          <Animated.View style={{
            transform: [
              { translateX: this.state.boxOffset }
            ]
          }}
          >
            <PlaceContainer
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
