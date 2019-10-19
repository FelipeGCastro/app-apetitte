import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Menu from '~/routesPrivate'
import Main from '~/pages/Main'
import Place from '~/pages/Place'
import Frequency from '~/pages/Frequency'

const Routes = createAppContainer(createSwitchNavigator({
  Main,
  Menu,
  Frequency,
  Place
}))

export default Routes
