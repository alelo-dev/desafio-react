import React from 'react';
import Widget from '../components/Widget';
import styles from './MainPage.module.scss';

const MainPage = () => {
  /**
   * TODO: criar um crud para buscar, listar, enviar e atualizar produtos da https://fakestoreapi.com/
   *  */
  const TableLines = () => {
    const arr: any = [];

    products.forEach((p: any, index) => {
      arr.push(
        <tr key={index}>
          <td>{p['name']}</td>
          <td>{p['price']}</td>
          <td>
            <button>Comprar</button>
          </td>
        </tr>
      );
    });

    return arr;
  };

  const products = [
    {
      name: 'produto 01',
      price: 1234,
    },
    {
      name: 'produto 02',
      price: 1234,
    },
    {
      name: 'produto 03',
      price: 1234,
    },
  ];

  return (
    <div className={styles.MainPage} data-testid="MainPage">
      <div className="App">
        <div className="promocoes">
          <Widget widget="promo" />
        </div>

        <div className="produtos">
          <table>
            <thead>
              <tr>
                <td>Produto</td>
                <td>Preço</td>
                <td>Ações</td>
              </tr>
            </thead>
            <tbody>{TableLines()}</tbody>
          </table>
        </div>

        <div className="promocoes">
          <Widget widget="card" />
          <Widget widget="info" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
