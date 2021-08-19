import React, {useMemo, useEffect, useState} from 'react';
import Widget from '../../components/Widget/Widget';
import Tabela from '../../components/tabela';
// import Button from '../../components/button';
import StringFormat from '../../util/StringFormat';
import styles from './MainPage.module.scss';
import { getProdutos } from '../../services/produto';

const MainPage = () => {

  const [produtos, setProdutos] = useState([]);
 
    useEffect(() => {
      getProdutos(async(cb: any)=>{
        setProdutos(cb);
        console.log('PRODUTOS :', cb);
      });
      
    }, [])

    const columns = useMemo(
      () => [
          {
              Header: 'Produto',
              accessor: 'produto',
              sortType: 'alphanumeric'
          },
          {
              Header: 'Valor',
              accessor: 'valor',
              sortType: 'alphanumeric'
          },
          {
            Header: 'Categoria',
            accessor: 'category',
            sortType: 'alphanumeric'
          },
          {
            Header: 'Descrição',
            accessor: 'description',
            sortType: 'alphanumeric'
          }
      ],
      [],
  )
      

  return (
    <div className={styles.container}>
        {/* <Widget widget="promo" /> */}
        <div className={styles.header}>
          <Widget widget="promo" />
        </div>
        <div className={styles.title}>
           Conheça nossos produtos
        </div> 
        <div className={styles.tabela}>
        <Tabela>
          <table >
            <thead>
              <tr>
                {columns.map(column => (
                  <th className="cursorPointer mr-4">
                    {column.Header}
                  </th>
                ))}
              </tr>
              </thead>
                <tbody>
                   {produtos?.length > 0 &&
                    produtos.map((data: any) =>{
                      return  <tr>
                                <td className="mr-5">{data?.title.substring(0, 20)}</td>
                                <td className="mr-5">{data?.price ? StringFormat.convertToReal(data.price) : null}</td>
                                <td className="mr-5">{data?.category}</td>
                                <td className="mr-5">{data?.description.substring(0, 40)}</td>
                                <td className="mr-5"><a><span className="link">Contratar</span></a></td>
                              </tr>
                    })}
                    {produtos?.length === 0 &&
                      <tr>
                        <td className="mr-5" >Dados não encontrados</td>
                      </tr>}
                  </tbody>
                </table>
              </Tabela>
            </div>
        <div className={styles.promocoes}>
          <Widget widget="card" />
          <Widget widget="info" />
        </div>
    </div>
  )
};

export default MainPage;
