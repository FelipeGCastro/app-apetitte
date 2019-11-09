/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DaysActions from '~/store/ducks/days'

import Triplo from './Triplo'
import Duplo from './Duplo'
import DuploSingle from './DuploSingle'

import {
  Container,
  HeaderContainer,
  HeaderName,
  PackageDays,
  ExpireContainer,
  ExpireText,
  ExpireDate,
  ScheduleContainer
} from './styles'

class Schedule extends Component {
  static navigationOptions = {
    header: null
  };

  // state = {
  //   days: [],
  // };

  componentDidMount = async () => {
    const { loadRequest } = this.props
    await loadRequest()
  }

  handleFoodPress = (dayId, productIndex) => {
    const { navigation, user } = this.props
    if (user.days !== 0) {
      navigation.navigate('Food', { productIndex, dayId })
    }
  }

  handleDrinkPress = (dayId, productIndex) => {
    const { navigation, user } = this.props
    if (user.days !== 0) {
      navigation.navigate('Drink', { productIndex, dayId })
    }
  }

  handleRemoveProduct = async (dayId, productIndex) => {
    const { removeProduct } = this.props
    await removeProduct(dayId, productIndex)
  }

  renderItem = ({ item }) => {
    const { user } = this.props
    let dayContainer
    switch (user.plan) {
      case 'triplo':
        dayContainer = (
          <Triplo
            item={item}
            user={user}
            onFoodPress={this.handleFoodPress}
            onDrinkPress={this.handleDrinkPress}
            onRemoveProduct={this.handleRemoveProduct}
          />
        )
        break
      case 'duplo':
        dayContainer = (
          <Duplo
            item={item}
            user={user}
            onFoodPress={this.handleFoodPress}
            onDrinkPress={this.handleDrinkPress}
            onRemoveProduct={this.handleRemoveProduct}
          />
        )
        break
      case 'duploSingle':
        dayContainer = (
          <DuploSingle
            item={item}
            user={user}
            onFoodPress={this.handleFoodPress}
            onDrinkPress={this.handleDrinkPress}
            onRemoveProduct={this.handleRemoveProduct}
          />
        )
        break

      default:
        break
    }
    return dayContainer
  }

  render () {
    const { days, user } = this.props
    return (
      <Container>
        <HeaderContainer>
          <HeaderName>Calendário</HeaderName>
          <PackageDays>{user.days} Dias</PackageDays>
          <ExpireContainer>
            <ExpireText>Expira</ExpireText>
            <ExpireDate>{user.expireDate}</ExpireDate>
          </ExpireContainer>
        </HeaderContainer>
        <ScheduleContainer
          data={days}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(day) => day.id.toString()}
          renderItem={this.renderItem}
        />
      </Container>
    )
  }
}

Schedule.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  loadRequest: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  days: PropTypes.array.isRequired,
  user: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired
}

const mapStateToProps = (state) => ({
  days: state.days.days,
  user: state.user.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators(DaysActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule)
