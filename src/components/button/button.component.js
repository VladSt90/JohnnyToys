import React from 'react';
import * as Styled from './button.styles';

export const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const buttonVariantToContainerMap = {
  [BUTTON_VARIANT.PRIMARY]: Styled.PrimaryContainer,
  [BUTTON_VARIANT.SECONDARY]: Styled.SecondaryContainer,
};

export const Button = ({
  title,
  onPress,
  style,
  variant = BUTTON_VARIANT.PRIMARY,
}) => {
  const Container = buttonVariantToContainerMap[variant];

  return (
    <Container style={style} onPress={onPress} variant={BUTTON_VARIANT}>
      <Styled.Title>{title}</Styled.Title>
    </Container>
  );
};
