/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Product from '../Product'

import {
  DayContainer,
  HeaderContainer,
  DayName,
  DayBox,
  DayStatus,
  StatusText,
  ProductContainer,
  ProductBox,
  AddText,
  ProductName,
  IconPlus
} from './styles'

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
    expanded: false
  }

  handleToggleExpand = () => {
    const { expanded } = this.state
    this.setState({ expanded: !expanded })
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
    // this.renderLabelBox(item, checkProducts)
    return (
      <DayBox status={checkProducts}>
        {item.snack1
          ? this.renderProduct(item, 'snack1', item.snack1)
          : this.renderProductChooseSnack(item, 'snack1')}
        {item.plan === 'triplo' && this.renderIconPlus()}
        {item.plan === 'triplo' && item.snack2
          ? this.renderProduct(item, 'snack2', item.snack2)
          : this.renderProductChooseSnack(item, 'snack2')}
        {item.drink || item.plan === 'triplo' ? this.renderIconPlus() : null}
        {item.drink
          ? this.renderProduct(item, 'drink', item.drink)
          : this.renderProductChooseDrink(item)}
      </DayBox>
    )
  }

  render () {
    const { expanded, heightAnimated } = this.state
    const { item, user } = this.props
    const checkProducts =
      !!item.snack1 && !!item.snack2 && !!item.drink
        ? 'complete'
        : !!item.snack1 || !!item.snack2 || !!item.drink
          ? 'pending'
          : user.days === 0 && 'pending'
    console.log(heightAnimated)
    return (
      <DayContainer style={styles.container}>
        <HeaderContainer onPress={this.handleToggleExpand}>
          <DayName>{item.name}</DayName>
          <IconPlus name={expanded ? 'up' : 'down'} size={25} color='#fff' />
        </HeaderContainer>

        {expanded && this.renderProductContainer(item, checkProducts)}
      </DayContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  }
})
