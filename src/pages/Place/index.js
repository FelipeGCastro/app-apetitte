import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import colombo from '~/assets/colombo.jpg';
import atrium from '~/assets/atrium-saldanha.jpg';
import {
  Container,
  PageText,
  FlatListContainer,
  PlaceContainer,
  PlaceBox,
  PlaceImage,
  PlaceName,
  PlaceDays,
  PlaceHours,
  PlaceCheckButton,
  NextButton,
  NextButtonText,
  FakeButton,
} from './styles';

export default class Place extends Component {

  state = {
      places: [
          {
            id: 1,
            image: colombo,
            name: "Colombo",
            days: "Segunda, Quarta e Sexta",
            hours: "9h e 16h",
          },
          {
            id: 2,
            image: atrium,
            name: "Atrium Saldanha",
            days: "Terça, Quinta e Sexta",
            hours: "10h e 15h"
          },
          {
            id: 3,
            image: atrium,
            name: "AlfraPark",
            days: "Segunda a Sexta",
            hours: "10h e 15h"
          },
      ],
      checked: null,
    };

  componentDidMount = () => {}

  handleCheckPlace = (item) => {
    const { checked } = this.state;
    if (checked === item.id) {
      this.setState({ checked: null });
    } else {
      this.setState({ checked: item.id });
    }
  }

  handleNextPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Frequency');
  }

  renderItem= ({ item }) => {
    const { checked } = this.state;
    return (
      <PlaceBox checked={checked === item.id ? true : null }>
        <PlaceImage source={item.image} resizeMode="cover" />
        <PlaceName>{item.name}</PlaceName>
        <PlaceDays>{item.days}</PlaceDays>
        <PlaceHours>{item.hours}</PlaceHours>
        <PlaceCheckButton onPress={() => this.handleCheckPlace(item)}>
          { checked === item.id
            ? (
              <Icon name="checkcircle" size={35} color="#71DFD3" />
            )
            : (
              <Icon name="pluscircleo" size={35} color="#fff" />
            )
              }
        </PlaceCheckButton>
      </PlaceBox>
    );
  };

  render() {
    const { places, checked } = this.state;
    return (
      <Container>
        <PageText>Primeiro Vamos decidir o lugar para sua entrega</PageText>
        <FlatListContainer>
          <PlaceContainer
            data={places}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(place) => place.id.toString()}
            renderItem={this.renderItem}
          />
        </FlatListContainer>
        {checked ? (
          <NextButton onPress={this.handleNextPress}>
            <NextButtonText>Próximo</NextButtonText>
          </NextButton>
        )
        :
          <FakeButton />
        }

      </Container>
    );
  }
}

