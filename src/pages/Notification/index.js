import React, { Component } from 'react';

import {
  Container,
  HeaderContainer,
  HeaderName,
  AlertContainer,
  AlertBox,
  AlertText,
} from './styles';


export default class Notification extends Component {
  componentDidMount = () => {}

  render() {
    return (
      <Container>
        <HeaderContainer>
          <HeaderName>Alertas</HeaderName>
        </HeaderContainer>
        <AlertContainer>
          <AlertBox>
            <AlertText>Aqui você verá suas notificacões
sobre os seus pedidos, avisos e
alertas. Fique atentos que grandes
novidades estão por vir.</AlertText>
          </AlertBox>
        </AlertContainer>
      </Container>
    );
  }
}

