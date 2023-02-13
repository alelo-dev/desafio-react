import React from 'react';

import Widget from '../components/Widget';
import styles from './MainPage.module.scss';
import Cards from '../assets/cartoes.svg';
import Phone from '../assets/phone.svg';
import Button from '../components/Button';

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
            <Button variant="text">Comprar</Button>
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
      <main className={styles.Main}>
        <div className={styles.MainHeader}>
          <Widget color="green">
            <h1>Peça seu cartão Alelo!</h1>
            <img src={Cards} alt="Alelo cards" />
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

        <div className={styles.MainFooter}>
          <Widget color="light-green">
            <div className={styles.Info}>
              <p>
                {`Aqui na Alelo, você lorem ipsum consectetur adipiscing elit.
                Etiam convallis nisi quam, luctus blandit nisi lobortis quis.
                Proin sem liaula. semoer id libero sit amet. auctor ullamcorper
                dul!:)`}
              </p>
            </div>
          </Widget>
          <Widget color="green">
            <div className={styles.Help}>
              <h2>Precisando de ajuda?</h2>
              <p>Fale com nosso time de atendimento!</p>
              <Button>
                <img src={Phone} alt="Phone icon" /> <span>Me Ajuda!</span>
              </Button>
            </div>
          </Widget>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
