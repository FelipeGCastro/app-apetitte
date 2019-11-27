import React, { Component } from 'react'
import { Animated } from 'react-native'

import colombo from '~/assets/colombo.jpg'
import atrium from '~/assets/atrium-saldanha.jpg'
import ButtonNext from '~/components/ButtonNext'
import {
  Container,
  PageText,
  FlatListContainer,
  PlaceContainer,
  PlaceBox,
  PlaceImage,
  PlaceName,
  PlaceDays,
  PlaceHours
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

  handleCheckPlace = (item) => () => {
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
    navigation.navigate('Frequency')
  }

  renderItem= ({ item }) => {
    const { checked } = this.state
    return (
      <PlaceBox
        onPress={this.handleCheckPlace(item)}
        checked={checked === item.id ? true : null}
      >
        <PlaceImage source={item.image} resizeMode='cover' />
        <PlaceName>{item.name}</PlaceName>
        <PlaceDays>{item.days}</PlaceDays>
        <PlaceHours>{item.hours}</PlaceHours>
      </PlaceBox>
    )
  };

  render () {
    const { places, checked } = this.state
    return (
      <Container>
        <PageText>Primeiro Vamos decidir o lugar para sua entrega</PageText>
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
