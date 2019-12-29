import React from 'react'
import PropTypes from 'prop-types'

import {
  ProductContainer,
  ProductImageBox,
  ProductRemove,
  IconClose,
  ProductImage,
  ProductNameContainer,
  ProductName
} from './styles'

const Product = ({ item, onRemoveProduct, name, product }) => (
  <ProductContainer>
    <ProductImageBox>
      <ProductRemove
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        onPress={() => onRemoveProduct(item.id, name)}
      >
        <IconClose name='closecircle' size={30} color='#FF7777' />
      </ProductRemove>
      <ProductImage source={{ uri: product.image }} resizeMode='cover' />
    </ProductImageBox>
    <ProductNameContainer>
      <ProductName>{product.name}</ProductName>
    </ProductNameContainer>
  </ProductContainer>
)

Product.propTypes = {
  onRemoveProduct: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
  product: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired
}

export default Product
