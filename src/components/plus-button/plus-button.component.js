import React from 'react';
import * as Styled from './plus-button.styles';

export const PlusButton = ({onPress, style}) => {
  return (
    <Styled.CircleButton style={style} onPress={onPress}>
      <Styled.PlusText>+</Styled.PlusText>
    </Styled.CircleButton>
  );
};
