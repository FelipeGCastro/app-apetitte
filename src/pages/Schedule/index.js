/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DaysActions from '~/store/ducks/days'
import Icon from 'react-native-vector-icons/Feather'

import Box from './Box'
import Calendar from './Calendar'

import {
  Container,
  HeaderContainer,
  HeaderName,
  PackageDays,
  CalendarOrList,
  ScheduleContainer
} from './styles'

class Schedule extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    calendar: null
  };

  componentDidMount = async () => {
    const { loadRequest } = this.props
    await loadRequest()
  }

  renderItem = ({ item }) => {
    const { user, navigation, removeProduct } = this.props
    return (
      <Box
        item={item}
        user={user}
        navigation={navigation}
        removeProduct={removeProduct}
      />)
  }

  handleCalendarPress = (calendar) => () => {
    this.setState({ calendar: !calendar })
  }

  render () {
    const {
      days,
      user,
      navigation,
      removeProduct
    } = this.props
    const { calendar } = this.state
    return (
      <Container>
        <HeaderContainer>
          <HeaderName>Calendário</HeaderName>
          <PackageDays>{user.days} Dias</PackageDays>
          <CalendarOrList onPress={this.handleCalendarPress(calendar)}>
            <Icon name={calendar ? 'list' : 'calendar'} size={32} color='#fff' />
          </CalendarOrList>
        </HeaderContainer>
        {calendar ? (
          <Calendar
            item={days[0]}
            user={user}
            navigation={navigation}
            removeProduct={removeProduct}
          />
        )
          : (
            <ScheduleContainer
              data={days}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(day) => day.id.toString()}
              renderItem={this.renderItem}
            />
          )}

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
