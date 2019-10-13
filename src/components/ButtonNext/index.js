import React from 'react';

import { NextButton, NextButtonText } from './styles';

const ButtonNext = ({ onPressFunction }) => {
  return (
    <NextButton onPress={onPressFunction}>
      <NextButtonText>Próximo</NextButtonText>
    </NextButton>
  )
};

export default ButtonNext;
