import React from 'react';
import Button from 'components/Button';
import Card from 'components/Card';
import { AiOutlinePhone } from 'react-icons/all'

import * as S from './styles';

const Information: React.FC = () => {
  return (
    <Card bgColor="secondary">
      <S.Container>
        <S.Title> Precisando de ajuda? </S.Title>
        <S.Paragraph>Fale com nosso time de atendimento</S.Paragraph>
        <Button 
          StartIcon={AiOutlinePhone} 
          color='secondary' size='medium' 
          label="Me ajuda!"/>
      </S.Container>
    </Card>
  );
};

export default Information;
