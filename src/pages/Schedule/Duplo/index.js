/* eslint-disable no-nested-ternary */
import React from 'react'

import PropTypes from 'prop-types'
import Product from '../Product'

import {
  DayContainer,
  DayName,
  DayBox,
  DayStatus,
  StatusText,
  ProductContainer,
  ProductBox,
  AddText,
  ProductName,
  TriploContainer,
  IconPlus
} from './styles'

const Duplo = ({ item, user, onRemoveProduct, onFoodPress, onDrinkPress }) => {
  const checkProducts = !!item.snack1 && !!item.drink
    ? 'complete'
    : (!!item.snack1 || !!item.drink)
      ? 'pending'
      : (user.days === 0) &&
      ('pending')
  return (
    <DayContainer>
      <DayName>{item.name}</DayName>
      <DayBox status={checkProducts}>

        {
          (!!item.snack1 && !!item.drink)
            ? (
              <DayStatus status={checkProducts}>
                <StatusText>Completo</StatusText>
              </DayStatus>
            )
            : (!!item.snack1 || !!item.drink)
              ? (
                <DayStatus status={checkProducts}>
                  <StatusText>Falta Completar</StatusText>
                </DayStatus>
              )
              : (user.days === 0) &&
            (
              <DayStatus status={checkProducts}>
                <StatusText>Acabou os seus dias</StatusText>
              </DayStatus>
            )

        }
        {
          item.snack1
            ? (
              <Product
                item={item}
                onRemoveProduct={onRemoveProduct}
                name='snack1'
                product={item.snack1}
              />
            )
            : (
              <ProductContainer>
                <ProductBox onPress={() => onFoodPress(item.id, 'snack1')}>
                  <AddText>Add</AddText>
                </ProductBox>
                <ProductName>Snack</ProductName>
              </ProductContainer>
            )
        }
        {
          item.drink
            ? (
              <TriploContainer>
                <IconPlus name='plus' size={25} color='#fff' />
                <Product
                  item={item}
                  onRemoveProduct={onRemoveProduct}
                  name='drink'
                  product={item.drink}
                />
              </TriploContainer>
            )
            : (
              <TriploContainer>
                <IconPlus name='plus' size={25} color='#fff' />
                <ProductContainer>
                  <ProductBox onPress={() => onDrinkPress(item.id, 'drink')}>
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
}

Duplo.propTypes = {
  item: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
  user: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
  onFoodPress: PropTypes.func.isRequired,
  onDrinkPress: PropTypes.func.isRequired
}

export default Duplo
