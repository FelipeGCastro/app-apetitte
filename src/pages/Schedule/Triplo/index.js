/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import { StyleSheet, Animated, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

import Product from '../Product'

import {
  HeaderContainer,
  DayName,
  DayBox,
  DayStatus,
  LabelStatusContainer,
  StatusText,
  ProductContainer,
  ProductBox,
  AddText,
  ProductName,
  IconPlus
} from './styles'
const widthScreen = Dimensions.get('window').width
export default class Triplo extends Component {
  static propTypes = {
    item: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array])
      .isRequired,
    user: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array])
      .isRequired,
    onRemoveProduct: PropTypes.func.isRequired,
    onFoodPress: PropTypes.func.isRequired,
    onDrinkPress: PropTypes.func.isRequired
  }

  state = {
    animation: new Animated.Value(0),
    expanded: false
  }

  handleToggleExpand = () => {
    const { expanded } = this.state
    this.setState({ expanded: !expanded })
    const finalValue = this.state.expanded ? 0 : 100
    Animated.spring(this.state.animation, {
      toValue: finalValue,
      bounciness: 10
    }).start()
  }

  _setMaxHeight (event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    })
  }

  _setMinHeight (event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    })
  }

  renderProductChooseSnack = (item, snackChoose) => {
    const { onFoodPress } = this.props
    return (
      <ProductContainer>
        <ProductBox onPress={() => onFoodPress(item.id, snackChoose)}>
          <AddText>Add</AddText>
        </ProductBox>
        <ProductName>Snack</ProductName>
      </ProductContainer>
    )
  }

  renderProduct = (item, product, productItem) => {
    const { onRemoveProduct } = this.props
    return (
      <Product
        item={item}
        onRemoveProduct={onRemoveProduct}
        name={product}
        product={productItem}
      />
    )
  }

  renderProductChooseDrink = item => {
    const { onDrinkPress } = this.props
    return (
      <ProductContainer>
        <ProductBox onPress={() => onDrinkPress(item.id, 'drink')}>
          <AddText>Add</AddText>
        </ProductBox>
        <ProductName>Bebida</ProductName>
      </ProductContainer>
    )
  }

  renderLabelBox = (item, checkProducts) => {
    const { user } = this.props
    return !!item.snack1 && !!item.snack2 && !!item.drink ? (
      <DayStatus status={checkProducts}>
        <StatusText>Completo</StatusText>
      </DayStatus>
    ) : !!item.snack1 || !!item.snack2 || !!item.drink ? (
      <DayStatus status={checkProducts}>
        <StatusText>Falta Completar</StatusText>
      </DayStatus>
    ) : (
      user.days === 0 && (
        <DayStatus status={checkProducts}>
          <StatusText>Acabou os seus dias</StatusText>
        </DayStatus>
      )
    )
  }

  renderIconPlus = () => <IconPlus name='plus' size={25} color='#fff' />

  renderProductContainer = (item, checkProducts) => {
    return (
      <DayBox status={checkProducts}>
        {item.snack1
          ? this.renderProduct(item, 'snack1', item.snack1)
          : this.renderProductChooseSnack(item, 'snack1')}
        {this.renderIconPlus()}
        {item.snack2
          ? this.renderProduct(item, 'snack2', item.snack2)
          : this.renderProductChooseSnack(item, 'snack2')}
        {this.renderIconPlus()}
        {item.drink
          ? this.renderProduct(item, 'drink', item.drink)
          : this.renderProductChooseDrink(item)}
      </DayBox>
    )
  }

  renderStatusLabel = (checkProducts) => {
    return <LabelStatusContainer status={checkProducts} />
  }

  verification = (item, user) => {
    return !!item.snack1 && !!item.snack2 && !!item.drink
      ? 'complete'
      : !!item.snack1 || !!item.snack2 || !!item.drink
        ? 'pending'
        : user.days === 0 && 'pending'
  }

  render () {
    const { expanded, animation } = this.state
    const { item, user } = this.props
    const checkProducts = this.verification(item, user)

    return (
      <Animated.View style={[styles.container, {
        height: animation.interpolate({
          inputRange: [0, 100],
          outputRange: [60, ((widthScreen) / 3) + 130]
        })
      }]}
      >
        <HeaderContainer onPress={this.handleToggleExpand}>
          <DayName>{item.name}</DayName>
          {this.renderStatusLabel(checkProducts)}
          <IconPlus name={expanded ? 'up' : 'down'} size={25} color='#fff' />
        </HeaderContainer>

        {this.renderProductContainer(item, checkProducts)}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    overflow: 'scroll'
  }
})
