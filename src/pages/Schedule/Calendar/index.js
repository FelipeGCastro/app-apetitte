import React, { Component } from 'react'

import { View, Text, TouchableOpacity, ScrollView, Animated, StyleSheet, Dimensions, Platform } from 'react-native'
import { colors } from '~/styles'
import { BoxProducts } from '~/components'
const widthScreen = Dimensions.get('window').width

export default class Calendar extends Component {
  months = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
    'Novembro', 'Dezembro']

  weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  state = {
    animation: new Animated.Value(0),
    enterScreen: new Animated.Value(100),
    activeDate: new Date(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    expanded: false,
    heightView: (widthScreen / 3) + 210
  }

  componentDidMount = () => {
    Animated.spring(this.state.enterScreen, {
      toValue: 0,
      bounciness: 3,
      speed: 1,
      useNativeDriver: true
    }).start()
  }

  generateMatrix () {
    var year = this.state.activeDate.getFullYear()
    var month = this.state.activeDate.getMonth()
    var firstDay = new Date(year, month, 1).getDay()
    var maxDays = this.nDays[month]
    if (month === 1) { // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDays += 1
      }
    }
    var matrix = []
    matrix[0] = this.weekDays
    var counter = 1
    for (var row = 1; row < 7; row++) {
      matrix[row] = []
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1
        if (row === 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++
        }
      }
    }
    return matrix
  }

  renderAnimationDayBox = (finalValue, after = null) => {
    Animated.timing(this.state.animation, {
      toValue: finalValue,
      duration: 400
    }).start(after)
  }

  handleDayPress = (rowIndex) => () => {
    const { expanded } = this.state
    const finalValue = expanded ? 0 : 100
    if (expanded) {
      this.renderAnimationDayBox(finalValue, () => {
        if (expanded !== rowIndex) {
          this.setState({ expanded: rowIndex }, () => {
            this.renderAnimationDayBox(100)
          })
        } else {
          this.setState({ expanded: false })
        }
      })
    } else {
      this.setState({ expanded: expanded === rowIndex ? false : rowIndex }, () => {
        this.renderAnimationDayBox(finalValue)
      })
    }
  }

  renderRowsItems = (row, rowIndex) => {
    const checkProducts = this.verification()
    return (row.map((item, colIndex) => (
      <TouchableOpacity
        key={colIndex}
        style={[styles.dayBox, {
          height: rowIndex === 0 || item === -1 ? 35 : 80,
          borderWidth: rowIndex === 0 ? null : 1,
          borderColor: rowIndex === 0 || item === -1 ? colors.background : '#fff'
        }]}
        onPress={this.handleDayPress(rowIndex)}
        disabled={colIndex === 0 || rowIndex === 0}
      >
        <Text
          style={[styles.dayNumber, {
            // Highlight header
            backgroundColor: rowIndex === 0 ? colors.blueDark : null,
            // Highlight Sundays
            color: colIndex === 0 ? colors.red : '#FFF'
          }]}
        >
          {item !== -1 ? item : ''}
        </Text>
        {item !== -1 && this.renderStatusLabel(checkProducts)}
      </TouchableOpacity>
    )
    ))
  }

  renderStatusLabel = (checkProducts) => {
    return (
      <View
        style={[styles.statusLabel, {
          display: checkProducts !== 'pending' && checkProducts !== 'complete' ? 'none' : 'flex',
          backgroundColor: checkProducts === 'pending'
            ? colors.red : (checkProducts === 'complete')
              ? colors.green : colors.white
        }]}
      />)
  }

  verification = () => {
    const { item, user } = this.props
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

  renderRows = (matrix) => {
    const {
      item,
      user,
      navigation,
      removeProduct
    } = this.props
    const { expanded, heightView } = this.state
    const checkProducts = this.verification()
    return (
      matrix.map((row, rowIndex) => {
        return (
          <Animated.View
            key={row}
            style={[{
              overflow: Platform.OS === 'ios' ? 'scroll' : 'hidden'
            },
            (row[0] !== 'Dom' && expanded === rowIndex) && {
              height: this.state.animation.interpolate({
                inputRange: [0, 100],
                outputRange: [90, heightView + 150]
              })
            }]}

          >
            <View style={styles.rowContainer}>
              {this.renderRowsItems(row, rowIndex)}
            </View>
            {(expanded === rowIndex) && (
              <View style={styles.boxProductsContainer}>
                <View style={styles.productsHeader}>
                  <Text style={styles.dayTitle}>{item.name}</Text>
                  {this.renderStatusLabel(checkProducts)}
                </View>
                <View onLayout={this.handleGetHeight}>
                  <BoxProducts
                    item={item}
                    checkProducts
                    user={user}
                    navigation={navigation}
                    removeProduct={removeProduct}
                  />
                </View>
              </View>
            )}

          </Animated.View>
        )
      })
    )
  }

  render () {
    const { month, year } = this.state
    var matrix = this.generateMatrix(2019, 11)
    return (
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={{
            transform: [
              { translateY: this.state.enterScreen }
            ]
          }}
        >
          <View style={styles.pageContainer}>
            <Text style={styles.titleText}>
              {this.months[month]} {year}
            </Text>
            {this.renderRows(matrix)}
          </View>
        </Animated.View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: 15
  },
  pageContainer: {
    flex: 1,
    paddingTop: 10
  },
  productsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'Usuazi-Hosomozi',
    textAlign: 'center',
    color: '#fff'
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  boxProductsContainer: {
    paddingVertical: 10
  },
  statusLabel: {
    flex: 1,
    width: '85%',
    maxHeight: 8,
    borderRadius: 1.5,
    borderWidth: 0.5,
    borderColor: colors.white,
    alignSelf: 'center'
  },
  dayTitle: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Usuazi-Hosomozi'
  },
  dayBox: {
    flex: 1,
    borderRadius: 4,
    alignItems: 'stretch'
  },
  dayNumber: {
    fontSize: 18,
    textAlign: 'center',
    height: 35,
    lineHeight: 35
  }

})
