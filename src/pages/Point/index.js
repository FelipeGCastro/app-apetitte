import React, { Component } from 'react'

import { Container, PageText } from './styles'
import ButtonNext from '~/components/ButtonNext'

export default class Point extends Component {
  state = {
    checked: null
  }

  render () {
    const { checked } = this.state
    return (
      <Container>
        <PageText>Vamos decidir o point que irar ser entregado</PageText>
        <ButtonNext onPressFunction={this.handleNextPress} checked={checked} />
      </Container>
    )
  }
}
