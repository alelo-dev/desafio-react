import React, { ReactNode } from 'react';

import * as S from './styles'

export type Colors = 'primary' | 'secondary' | 'default'

type CardProps = {
  children?: ReactNode,
  bgColor?: Colors
}

const Card: React.FC<CardProps> = ({children, bgColor = 'default'}) => {
  return (
    <S.Container bgColor={bgColor}>
      {children}
    </S.Container>
  );
};

export default Card;