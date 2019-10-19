import { createStackNavigator } from 'react-navigation'
import { colors } from '~/styles'

import Food from '~/pages/Food'
import Drink from '~/pages/Drink'

const schedule = createStackNavigator(
  {
    Food,
    Drink
  },
  {
    // initialRouteName: 'Schedule',
    mode: 'modal',
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: colors.textPrimary,
        fontWeight: 'normal'
      }
    }
  }
)

export default schedule
