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
          <Widget color="green">
            <div id="promo">
              <h2> Faça seu cartão Alelo!! </h2>
              <a href="#">Ver mais</a>
            </div>
          </Widget>
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
          <Widget color="light-green">
            <div id="card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Widget>
          <Widget color="green">
            <div id="info">
              <h2> Faça seu cartão Alelo hoje mesmo!! </h2>
              <p>produtos em destaque</p>
              <a href="#">Ver mais</a>
            </div>
          </Widget>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
