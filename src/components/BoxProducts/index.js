import React from 'react'
import { Product } from '~/components'
import {
  ProductContainer,
  ProductBox,
  AddText,
  ProductNameContainer,
  ProductName,
  // DayStatus,
  // StatusText,
  IconPlus,
  DayBox
} from './styles'

const BoxProducts = ({ item, checkProducts, user, removeProduct, navigation }) => {
  const handleFoodAndDrinkPress = (type, dayId, productIndex) => {
    if (user.days > 0) {
      navigation.navigate(type, { productIndex, dayId })
    }
  }

  const handleRemoveProduct = async (dayId, productIndex) => {
    await removeProduct(dayId, productIndex)
  }

  const renderProductChooseSnack = (item, snackChoose) => {
    return (
      <ProductContainer>
        <ProductBox onPress={() => handleFoodAndDrinkPress('Food', item.id, snackChoose)}>
          <AddText>Add</AddText>
        </ProductBox>
        <ProductNameContainer>
          <ProductName>Snack</ProductName>
        </ProductNameContainer>
      </ProductContainer>
    )
  }

  const renderProduct = (item, product, productItem) => {
    return (
      <Product
        item={item}
        onRemoveProduct={handleRemoveProduct}
        name={product}
        product={productItem}
      />
    )
  }

  const renderProductChooseDrink = item => {
    return (
      <ProductContainer>
        <ProductBox onPress={() => handleFoodAndDrinkPress('Drink', item.id, 'drink')}>
          <AddText>Add</AddText>
        </ProductBox>
        <ProductNameContainer>
          <ProductName>Bebida</ProductName>
        </ProductNameContainer>
      </ProductContainer>
    )
  }
  // const renderLabelBox = (item, checkProducts) => {
  //   const { user } = this.props
  //   return !!item.snack1 && !!item.snack2 && !!item.drink ? (
  //     <DayStatus status={checkProducts}>
  //       <StatusText>Completo</StatusText>
  //     </DayStatus>
  //   ) : !!item.snack1 || !!item.snack2 || !!item.drink ? (
  //     <DayStatus status={checkProducts}>
  //       <StatusText>Falta Completar</StatusText>
  //     </DayStatus>
  //   ) : (
  //     user.days === 0 && (
  //       <DayStatus status={checkProducts}>
  //         <StatusText>Acabou os seus dias</StatusText>
  //       </DayStatus>
  //     )
  //   )
  // }

  const renderIconPlus = () => <IconPlus name='plus' size={25} color='#fff' />

  return (
    <DayBox status={checkProducts}>
      {item.snack1
        ? renderProduct(item, 'snack1', item.snack1)
        : renderProductChooseSnack(item, 'snack1')}
      {renderIconPlus()}
      {item.snack2
        ? renderProduct(item, 'snack2', item.snack2)
        : renderProductChooseSnack(item, 'snack2')}
      {renderIconPlus()}
      {item.drink
        ? renderProduct(item, 'drink', item.drink)
        : renderProductChooseDrink(item)}
    </DayBox>
  )
}

export default BoxProducts
