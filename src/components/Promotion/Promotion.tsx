import React from 'react';
import Card from 'components/Card';
import Cards from 'assets/cartoes.png'

import * as S from './styles'

const Promo: React.FC = () => {
  return (
    <Card bgColor="secondary">
      <S.Container>
        <S.Title> Peça seu cartão Alelo! </S.Title>
        <S.Cards src={Cards} alt="Cartoes da Alelo diferenciados" />
      </S.Container>
    </Card>
  );
};

export default Promo;