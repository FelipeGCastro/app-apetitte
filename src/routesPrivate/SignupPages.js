import { createStackNavigator } from 'react-navigation'
import { colors } from '~/styles'

import Place from '~/pages/Signup/Place'
import Frequency from '~/pages/Signup/Frequency'
import AccountInfo from '~/pages/Signup/AccountInfo'
import Point from '~/pages/Signup/Point'

const SignupPages = createStackNavigator({
  AccountInfo,
  Place,
  Frequency,
  Point
},
{
  // initialRouteName: 'Schedule',
  headerMode: 'none',
  defaultNavigationOptions: {
    headerTitleStyle: {
      color: colors.textPrimary,
      fontWeight: 'normal'
    }
  }
}
)

export default SignupPages
