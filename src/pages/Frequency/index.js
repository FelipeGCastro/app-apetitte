import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/AntDesign'
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
  FrequencyDescription,
  FrequencyCheckButton,
  NextButton,
  NextButtonText,
  FakeButton,
  PointsContainer,
  PointsText
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
    checked: null
  };

  componentDidMount = () => {}

  handleCheckFrequency = (item) => {
    const { checked } = this.state
    if (checked === item.id) {
      this.setState({ checked: null })
    } else {
      this.setState({ checked: item.id })
    }
  }

  handleNextPress = () => {
    const { navigation } = this.props
    navigation.navigate('Menu')
  }

  renderItem= ({ item }) => {
    const { checked } = this.state
    return (
      <FrequencyBox
        onPress={() => this.handleCheckFrequency(item)}
        checked={checked === item.id ? true : null}
      >
        <FrequencyImage source={item.image} resizeMode='cover' />
        <FrequencyDays>{item.days}</FrequencyDays>
        <FrequencyDescription>{item.description}</FrequencyDescription>
        <PointsContainer>
          <PointsText>Ganhe {item.points} Pontos</PointsText>
        </PointsContainer>
      </FrequencyBox>
    )
  };

  render () {
    const { Frequencys, checked } = this.state
    return (
      <Container>
        <PageText>Agora vamos escolher a frequência.</PageText>
        <FlatListContainer>
          <FrequencyContainer
            data={Frequencys}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(frequency) => frequency.id.toString()}
            renderItem={this.renderItem}
          />
        </FlatListContainer>
        {checked ? <ButtonNext onPressFunction={this.handleNextPress} />
          : <FakeButton />}
      </Container>
    )
  }
}
