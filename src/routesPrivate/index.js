// import React from 'react';
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'

import TabNavigator from './menu'
import Food from '~/pages/Food'
import Drink from '~/pages/Drink'
import { colors } from '~/styles'

const products = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    },
    Food,
    Drink
  },
  {
    initialRouteName: 'TabNavigator',
    mode: 'modal',
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: colors.textPrimary,
        fontWeight: 'normal'
      }
    }
  }
)

export default createAppContainer(products)
