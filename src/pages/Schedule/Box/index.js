/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import { StyleSheet, Animated, Dimensions, View, Platform } from 'react-native'
import PropTypes from 'prop-types'
import { BoxProducts } from '~/components'

import {
  HeaderContainer,
  DayName,
  LabelStatusContainer,
  IconPlus
} from './styles'

const widthScreen = Dimensions.get('window').width

export default class Box extends Component {
  static propTypes = {
    item: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array])
      .isRequired,
    user: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array])
      .isRequired
  }

  state = {
    animation: new Animated.Value(0),
    expanded: false,
    heightView: (widthScreen / 3) + 180
  }

  handleToggleExpand = () => {
    const { expanded } = this.state
    this.setState({ expanded: !expanded }, () => {
      const finalValue = this.state.expanded ? 100 : 0
      Animated.timing(this.state.animation, {
        toValue: finalValue,
        duration: 400
        // bounciness: 10
      }).start()
    })
  }

  renderStatusLabel = (checkProducts) => {
    return <LabelStatusContainer status={checkProducts} />
  }

  verification = (item, user) => {
    return !!item.snack1 &&
    !!item.snack2 &&
    !!item.drink
      ? 'complete'
      : !!item.snack1 || !!item.snack2 || !!item.drink
        ? 'pending'
        : user.days === 0 && 'pending'
  }

handleGetHeight = (event) => {
  const { height } = event.nativeEvent.layout
  this.setState({ heightView: height })
}

render () {
  const { expanded, animation, heightView } = this.state
  const {
    item,
    user,
    navigation,
    removeProduct
  } = this.props
  const checkProducts = this.verification(item, user)
  return (
    <Animated.View style={[styles.container, {
      height: animation.interpolate({
        inputRange: [0, 100],
        outputRange: [60, heightView + 80]
      })
    }]}
    >
      <HeaderContainer onPress={this.handleToggleExpand}>
        <DayName>{item.name}</DayName>
        {this.renderStatusLabel(checkProducts)}
        <IconPlus name={expanded ? 'up' : 'down'} size={25} color='#fff' />
      </HeaderContainer>

      <View onLayout={this.handleGetHeight}>
        <BoxProducts
          item={item}
          checkProducts={checkProducts}
          user={user}
          navigation={navigation}
          removeProduct={removeProduct}
        />
      </View>
    </Animated.View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    overflow: Platform.OS === 'ios' ? 'scroll' : 'hidden'
  }
})
