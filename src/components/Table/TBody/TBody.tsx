import Button from 'components/Button';
import React from 'react';
import { ProductType } from 'types/ProductType';
import * as S from './styles'


type TBodyProps = {
  tbody: ProductType[]
  handleChangeSales: (product: ProductType) => void
}

export default function TBody({tbody, handleChangeSales}:TBodyProps ){
  return (
    <S.TBody>
      {tbody && tbody.map((item: ProductType) => 
        (
          <S.Tr key={item.id}>
            <S.Td data-label="PRODUTO">{item.title}</S.Td>
            <S.Td data-label="PREÇO">{item.price}</S.Td>
            <S.Td data-label="CATEGORIA">{item.category}</S.Td>
            <S.Td data-label="DESCRIÇÃO">{item.description}</S.Td>
            <S.Td>
              <Button 
                onClick={() => handleChangeSales(item)} 
                label="Contratar"
                color="link"
                size="small"/>
            </S.Td>
          </S.Tr>
        )
        )}
    </S.TBody>
  );
};

