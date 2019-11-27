import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Menu from '~/routesPrivate'
import Main from '~/pages/Main'
import SignupPages from '~/routesPrivate/SignupPages'

const Routes = createAppContainer(createSwitchNavigator({
  Main,
  Menu,
  SignupPages
}))

export default Routes
