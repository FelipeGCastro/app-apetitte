import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { HeaderContainer, BackButton, HeaderName } from './styles'

const Header = ({ name, navigation }) => {
  // function handleBackButton() {
  //   ;
  // }
  return (
    <HeaderContainer>
      <BackButton
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name='arrow-back' size={25} color='#fff' />
      </BackButton>
      <HeaderName>{name}</HeaderName>
    </HeaderContainer>
  )
}

export default Header
