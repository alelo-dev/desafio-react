import React from 'react';
import * as S from './styles'

type THeadProps = {
  thead: string[]
}

export default function THead ({ thead } :THeadProps ) {
  return (
    <S.THead>
      <S.Tr>
        {thead && thead.map((label) => <S.Th key={label}>{label}</S.Th>)}
      </S.Tr>
    </S.THead>
  );
};