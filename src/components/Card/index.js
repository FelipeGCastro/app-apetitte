import React from 'react'

import {
  CardBox,
  CardImage,
  CardPrimaryText,
  CardSecundaryText,
  CardThirdText
} from './styles'

const Card = ({ item, primaryText, secundaryText, thirdText, checked, onCheckCard }) => (
  <CardBox
    onPress={onCheckCard(item)}
    checked={checked}
  >
    <CardImage source={item.image} resizeMode='cover' />
    <CardPrimaryText>{primaryText}</CardPrimaryText>
    {secundaryText && <CardSecundaryText>{secundaryText}</CardSecundaryText>}
    {thirdText && <CardThirdText>{thirdText}</CardThirdText>}
  </CardBox>
)

export default Card
