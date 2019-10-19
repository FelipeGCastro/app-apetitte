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

const DuploSingle = ({ item, user, handleRemoveProduct, handleFoodPress }) => {
  const checkProducts = !!item.snack1 && !!item.snack2
    ? 'complete'
    : (!!item.snack1 || !!item.item.snack2)
      ? 'pending'
      : (user.days === 0) &&
      ('pending')
  return (
    <DayContainer>
      <DayName>{item.name}</DayName>
      <DayBox status={checkProducts}>

        {
          (!!item.snack1 && !!item.snack2)
            ? (
              <DayStatus status={checkProducts}>
                <StatusText>Completo</StatusText>
              </DayStatus>
            )
            : (!!item.snack1 || !!item.snack2)
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
                handleRemoveProduct={handleRemoveProduct}
                name='snack1'
                product={item.snack1}
              />
            )
            : (
              <ProductContainer>
                <ProductBox onPress={() => handleFoodPress(item.id, 'snack1')}>
                  <AddText>Add</AddText>
                </ProductBox>
                <ProductName>Snack</ProductName>
              </ProductContainer>
            )
        }
        {item.plan === 'triplo' &&
      (
        item.snack2
          ? (
            <TriploContainer>
              <IconPlus name='plus' size={25} color='#fff' />
              <Product
                item={item}
                handleRemoveProduct={handleRemoveProduct}
                name='snack2'
                product={item.snack2}
              />
            </TriploContainer>
          )
          : (
            <TriploContainer>
              <IconPlus name='plus' size={25} color='#fff' />
              <ProductContainer>
                <ProductBox onPress={() => handleFoodPress(item.id, 'snack2')}>
                  <AddText>Add</AddText>
                </ProductBox>
                <ProductName>Snack</ProductName>
              </ProductContainer>
            </TriploContainer>
          )
      )}
      </DayBox>
    </DayContainer>
  )
}

DuploSingle.propTypes = {
  item: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
  user: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
  handleFoodPress: PropTypes.func.isRequired,
  handleDrinkPress: PropTypes.func.isRequired
}

export default DuploSingle
