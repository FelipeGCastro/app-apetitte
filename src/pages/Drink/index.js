import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/AntDesign'
import Header from '~/components/Header'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DaysActions from '~/store/ducks/days'

import api from '~/services/api'

import {
  Container,
  DrinkListContainer,
  DrinkContainer,
  DrinkCategory,
  DrinkFlatList,
  DrinkBox,
  DrinkImage,
  DrinkName,
  DrinkDescription,
  AddButton
} from './styles'

class Drink extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    drinksCategory: [],
    productIndex: '',
    dayId: null
  };

  componentDidMount = async () => {
    const { navigation } = this.props
    const productIndex = navigation.getParam('productIndex', 'snack1')
    const dayId = navigation.getParam('dayId', 'no-ID')
    const response = await api.get('drinks')
    this.setState({ drinksCategory: response.data, productIndex, dayId })
  }

  handleAddButton = async (item) => {
    const { productIndex, dayId } = this.state
    const { updateProduct, navigation } = this.props
    await updateProduct(dayId, productIndex, item)
    navigation.goBack()
  }

  renderItem = ({ item }) => (
    <DrinkBox>
      <DrinkImage source={{ uri: item.image }} risizeMode='cover' />
      <DrinkName>{item.name}</DrinkName>
      <DrinkDescription>{item.description}</DrinkDescription>
      <AddButton onPress={() => this.handleAddButton(item)}>
        <Icon name='pluscircleo' size={30} color='#fff' />
      </AddButton>
    </DrinkBox>
  )

  render () {
    const { navigation } = this.props
    const { drinksCategory } = this.state
    return (
      <Container>
        <Header name='Bebidas' navigation={navigation} />
        <DrinkListContainer
          data={drinksCategory}
          showsVerticalScrollIndicator={false}
          keyExtractor={(drinks) => drinks.id.toString()}
          renderItem={({ item }) => (
            <DrinkContainer>
              <DrinkCategory>{item.name}</DrinkCategory>
              <DrinkFlatList
                data={item.data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(drinks) => drinks.id.toString()}
                renderItem={this.renderItem}
              />
            </DrinkContainer>
          )}
        />
      </Container>
    )
  }
}

Drink.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
  }).isRequired,
  updateProduct: PropTypes.func.isRequired
}
const mapDispatchToProps = (dispatch) => bindActionCreators(DaysActions, dispatch)

export default connect(null, mapDispatchToProps)(Drink)
