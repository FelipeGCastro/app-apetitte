import React from 'react'
import {
  createBottomTabNavigator
} from 'react-navigation'

import Icon from 'react-native-vector-icons/AntDesign'
import IconHistory from 'react-native-vector-icons/MaterialIcons'

import Schedule from '~/pages/Schedule'
import Profile from '~/pages/Profile'
import Notification from '~/pages/Notification'
import History from '~/pages/History'
import { colors } from '~/styles'

const TabNavigator = createBottomTabNavigator(
  {
    Schedule,
    Notification,
    History,
    Profile
  },
  {
    initialRouteName: 'Schedule',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state

        let iconName
        if (routeName === 'Schedule') {
          iconName = 'calendar'
          const IconComponent = Icon
          return <IconComponent name={iconName} size={30} color={tintColor} />
        }
        if (routeName === 'History') {
          iconName = 'history'
          const IconComponent = IconHistory
          return <IconComponent name={iconName} size={32} color={tintColor} />
        }
        if (routeName === 'Notification') {
          iconName = 'bells'
          const IconComponent = Icon
          return <IconComponent name={iconName} size={27} color={tintColor} />
        }
        if (routeName === 'Profile') {
          iconName = 'user'
          const IconComponent = Icon
          return <IconComponent name={iconName} size={30} color={tintColor} />
        }

        // You can return any component that you like here!
        // return <IconComponent name={iconName} size={25} color={tintColor} />;
      }

    }),
    tabBarOptions: {
      keyboardHidesTabBar: true,
      showLabel: false,
      activeTintColor: colors.green,
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: colors.blue,
        borderTopColor: colors.blue
      }
    }
  }
)

export default TabNavigator
