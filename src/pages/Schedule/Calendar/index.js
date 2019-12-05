import React, { Component } from 'react'

import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native'
import { colors } from '~/styles'
import { BoxProducts } from '~/components'

export default class Calendar extends Component {
  months = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
    'Novembro', 'Dezembro']

  weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  state = {
    animation: new Animated.Value(0),
    activeDate: new Date(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  }

  componentDidMount = () => {
    Animated.timing(this.state.animation, {
      toValue: 100,
      duration: 400
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

  _onPress = (item) => {
    this.setState(() => {

    })
  }

  renderRowsItems = (row, rowIndex) => (
    row.map((item, colIndex) => {
      return (
        <TouchableOpacity
          key={colIndex} style={{
            flex: 1,
            height: rowIndex === 0 || item === -1 ? 35 : 90,
            borderWidth: rowIndex === 0 ? null : 1,
            borderColor: rowIndex === 0 || item === -1 ? colors.background : '#fff',
            borderRadius: 4
          }}
          onPress={() => this._onPress(item)}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              height: 35,
              lineHeight: 35,
              // Highlight header
              backgroundColor: rowIndex === 0 ? colors.blueDark : null,
              // Highlight Sundays
              color: colIndex === 0 ? 'red' : '#FFF'
            }}
          >
            {item !== -1 ? item : ''}
          </Text>
        </TouchableOpacity>
      )
    })
  )

  renderRows = (matrix) => {
    const {
      item,
      user,
      navigation,
      removeProduct
    } = this.props
    return (
      matrix.map((row, rowIndex) => {
        console.log(row)
        return (
          <View key={row}>
            <View

              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {this.renderRowsItems(row, rowIndex)}
            </View>
            {row[0] !== 'Dom' && (
              <BoxProducts
                item={item}
                checkProducts
                user={user}
                navigation={navigation}
                removeProduct={removeProduct}
              />
            )}

          </View>
        )
      })
    )
  }

  render () {
    const { month, year } = this.state
    var matrix = this.generateMatrix(2019, 11)
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: 'stretch',
          paddingVertical: 10,
          paddingHorizontal: 15
        }}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={{ opacity: this.state.animation }}>
          <View style={{
            flex: 1,
            marginTop: 20
          }}
          >
            <Text style={{
              fontWeight: 'bold',
              fontSize: 40,
              fontFamily: 'Usuazi-Hosomozi',
              textAlign: 'center',
              color: '#fff',
              marginBottom: 10
            }}
            >
              {this.months[month]} {year}
            </Text>
            {this.renderRows(matrix)}
          </View>
        </Animated.View>
      </ScrollView>
    )
  }
}
