import React from 'react'
import PropTypes from 'prop-types'

import {
  ProductContainer,
  ProductImageBox,
  ProductRemove,
  IconClose,
  ProductImage,
  ProductName
} from './styles'

const Product = ({ item, onRemoveProduct, name, product }) => (
  <ProductContainer>
    <ProductImageBox>
      <ProductRemove
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        onPress={() => onRemoveProduct(item.id, name)}
      >
        <IconClose name='closecircle' size={30} color='#FF7777' />
      </ProductRemove>
      <ProductImage source={{ uri: product.image }} resizeMode='cover' />
    </ProductImageBox>
    <ProductName>{product.name}</ProductName>
  </ProductContainer>
)

Product.propTypes = {
  onRemoveProduct: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
  product: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired
}

export default Product
