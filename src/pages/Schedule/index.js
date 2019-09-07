/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DaysActions from '~/store/ducks/days';

import {
  Container,
  HeaderContainer,
  HeaderName,
  PackageDays,
  Points,
  ScheduleContainer,
  DayContainer,
  DayName,
  DayStatus,
  StatusText,
  DayBox,
  ProductContainer,
  TriploContainer,
  IconPlus,
  ProductBox,
  ProductImageBox,
  IconClose,
  ProductRemove,
  ProductImage,
  // ProductExtraBox,
  // ExtraText,
  // ProductExtraName,
  AddText,
  ProductName,
} from './styles';

class Schedule extends Component {
  static navigationOptions = {
    header: null,
  };

  // state = {
  //   days: [],
  // };

  componentDidMount = async () => {
    const { loadRequest } = this.props;
    await loadRequest();
  }

  handleFoodPress = (dayId, productIndex) => {
    const { navigation } = this.props;
    navigation.navigate('Food', { productIndex, dayId });
  }

  handleDrinkPress = (dayId, productIndex) => {
    const { navigation } = this.props;
    navigation.navigate('Drink', { productIndex, dayId });
  }

  handleRemoveProduct = async (dayId, productIndex) => {
    const { removeProduct } = this.props;
    await removeProduct(dayId, productIndex);
  }

  renderItem = ({ item }) => (
    <DayContainer>
      <DayName>{item.name}</DayName>
      <DayBox status={
        !!item.snack1 && !!item.snack2 && !!item.drink
          ? 'complete'
          : (!!item.snack1 || !!item.snack2 || !!item.drink)
            ? 'pending'
            : null
      }
      >
        {/* Alert of Status */}
        {
        (!!item.snack1 && !!item.snack2 && !!item.drink)
          ? (
            <DayStatus status="complete">
              <StatusText>Completo</StatusText>
            </DayStatus>
          )
          : (!!item.snack1 || !!item.snack2 || !!item.drink)
            ? (
              <DayStatus status="pending">
                <StatusText>Falta Completar</StatusText>
              </DayStatus>
            )
            : (
              null
            )

        }
        {
          item.snack1
            ? (
              <ProductContainer>
                <ProductImageBox>
                  <ProductRemove onPress={() => this.handleRemoveProduct(item.id, 'snack1')}>
                    <IconClose name="closecircle" size={30} color="#FF7777" />
                  </ProductRemove>
                  <ProductImage source={{ uri: item.snack1.image }} resizeMode="cover" />
                </ProductImageBox>
                <ProductName>{item.snack1.name}</ProductName>
              </ProductContainer>
            )
            : (
              <ProductContainer>
                <ProductBox onPress={() => this.handleFoodPress(item.id, 'snack1')}>
                  <AddText>Add</AddText>
                </ProductBox>
                <ProductName>Snack</ProductName>
              </ProductContainer>
            )
        }
        { item.plan === 'triplo'
      && (
        item.snack2
          ? (
            <TriploContainer>
              <IconPlus name="plus" size={25} color="#fff" />
              <ProductContainer>
                <ProductImageBox>
                  <ProductRemove onPress={() => this.handleRemoveProduct(item.id, 'snack2')}>
                    <IconClose name="closecircle" size={30} color="#FF7777" />
                  </ProductRemove>
                  <ProductImage source={{ uri: item.snack2.image }} resizeMode="cover" />
                </ProductImageBox>
                <ProductName>{item.snack2.name}</ProductName>
              </ProductContainer>
            </TriploContainer>
          )
          : (
            <TriploContainer>
              <IconPlus name="plus" size={25} color="#fff" />
              <ProductContainer>
                <ProductBox onPress={() => this.handleFoodPress(item.id, 'snack2')}>
                  <AddText>Add</AddText>
                </ProductBox>
                <ProductName>Snack</ProductName>
              </ProductContainer>
            </TriploContainer>
          )
      )}
        {
            item.drink
              ? (
                <TriploContainer>
                  <IconPlus name="plus" size={25} color="#fff" />
                  <ProductContainer>
                    <ProductImageBox>
                      <ProductRemove onPress={() => this.handleRemoveProduct(item.id, 'drink')}>
                        <IconClose name="closecircle" size={30} color="#FF7777" />
                      </ProductRemove>
                      <ProductImage source={{ uri: item.drink.image }} resizeMode="cover" />
                    </ProductImageBox>
                    <ProductName>{item.drink.name}</ProductName>
                  </ProductContainer>
                </TriploContainer>
              )
              : (
                <TriploContainer>
                  <IconPlus name="plus" size={25} color="#fff" />
                  <ProductContainer>
                    <ProductBox onPress={() => this.handleDrinkPress(item.id, 'drink')}>
                      <AddText>Add</AddText>
                    </ProductBox>
                    <ProductName>Bebida</ProductName>
                  </ProductContainer>
                </TriploContainer>
              )
          }

      </DayBox>
    </DayContainer>
  )

  render() {
    const { days, user } = this.props;
    return (
      <Container>
        <HeaderContainer>
          <HeaderName>Calendário</HeaderName>
          <PackageDays>{ user.days } Dias</PackageDays>
          <Points>Colombo</Points>
        </HeaderContainer>
        <ScheduleContainer
          data={days}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(day) => day.id.toString()}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

Schedule.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  loadRequest: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  days: PropTypes.array.isRequired,
  user: PropTypes.oneOfType([ PropTypes.shape({}), PropTypes.array]).isRequired,
};

/* <ProductContainer>
  <ProductExtraBox>
    <ExtraText>Pago</ExtraText>
  </ProductExtraBox>
  <ProductExtraName>Extra</ProductExtraName>
</ProductContainer> */
const mapStateToProps = (state) => ({
  days: state.days.days,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(DaysActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Schedule);
