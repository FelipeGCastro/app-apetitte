import { createStackNavigator } from 'react-navigation'
import { colors } from '~/styles'

import Place from '~/pages/Place'
import Frequency from '~/pages/Frequency'
import AccountInfo from '~/pages/AccountInfo'

const SignupPages = createStackNavigator({
  AccountInfo,
  Place,
  Frequency
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
