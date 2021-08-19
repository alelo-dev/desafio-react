import React from 'react'
import TabelaWrapper from './styles'

const Tabela = (props: any) => {

    return (
      <>
        <TabelaWrapper>
          <div >
            {props.children}
          </div>
        </TabelaWrapper>
      </>
    );
};

export default Tabela;