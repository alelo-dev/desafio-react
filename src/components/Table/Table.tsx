import React, { ReactNode } from 'react'
import { ProductType } from 'types/ProductType'
import TBody from './TBody'
import THead from './THead'
import * as S from './styles'

type TableProps = {
  children?: ReactNode
  thead: string[]
  tbody: ProductType[]
  handleChangeSales: (product: ProductType) => void
}

export default function Table({ children, thead, tbody, handleChangeSales }: TableProps ) {
  return (
    <S.Container>
      <S.Table>
        <THead thead={thead}/>
        <TBody tbody={tbody} handleChangeSales={handleChangeSales}/>
      </S.Table>
    </S.Container>
  )
}
