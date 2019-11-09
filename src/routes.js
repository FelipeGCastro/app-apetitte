import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Menu from '~/routesPrivate'
import Main from '~/pages/Main'
import Place from '~/pages/Place'
import Frequency from '~/pages/Frequency'

const Routes = createAppContainer(createSwitchNavigator({
  Menu,
  Main,
  Frequency,
  Place
}))

export default Routes
