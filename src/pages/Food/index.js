import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DaysActions from '~/store/ducks/days';

import api from '~/services/api';

import {
  Container,
  FoodListContainer,
  FoodContainer,
  FoodCategory,
  FoodFlatList,
  FoodBox,
  FoodImage,
  FoodName,
  FoodDescription,
  AddButton,
} from './styles';

import Header from '~/components/Header';

class Food extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    foodsCategory: null,
    productIndex: '',
    dayId: null,
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const productIndex = navigation.getParam('productIndex', 'snack1');
    const dayId = navigation.getParam('dayId', 'no-ID');
    const response = await api.get('/foods');
    this.setState({ foodsCategory: response.data, productIndex, dayId });
  }

  handleAddButton = async (item) => {
    const { productIndex, dayId } = this.state;
    const { updateProduct, navigation } = this.props;

    await updateProduct(dayId, productIndex, item);
    navigation.goBack();
  }

  renderItem = ({ item }) => (
    <FoodBox>
      <FoodImage
        source={{ uri: item.image }}
        resizeMode="cover"
        PlaceholderContent={<ActivityIndicator />}
      />
      <FoodName>{item.name}</FoodName>
      <FoodDescription>{item.description}</FoodDescription>
      <AddButton onPress={() => this.handleAddButton(item)}>
        <Icon name="pluscircleo" size={30} color="#fff" />
      </AddButton>
    </FoodBox>
  )

  render() {
    const { navigation } = this.props;
    const { foodsCategory } = this.state;
    return (
      <Container>
        <Header name="Salgados" navigation={navigation} />
        <FoodListContainer
          data={foodsCategory}
          showsVerticalScrollIndicator={false}
          keyExtractor={(foods) => foods.id.toString()}
          renderItem={(({ item }) => (
            <FoodContainer>
              <FoodCategory>{item.name}</FoodCategory>
              <FoodFlatList
                data={item.data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(food) => food.id.toString()}
                renderItem={this.renderItem}
              />
            </FoodContainer>
          ))}
        />
      </Container>
    );
  }
}

Food.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  updateProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(DaysActions, dispatch);

export default connect(null, mapDispatchToProps)(Food);
