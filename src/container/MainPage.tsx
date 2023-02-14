import React from 'react';

import Widget from '../components/Widget';
import styles from './MainPage.module.scss';
import Cards from '../assets/cartoes.svg';
import Phone from '../assets/phone.svg';
import Button from '../components/Button';
import Table from '../components/Table';
import Loading from '../components/Loading';
import useProducts from '../hooks/useProducts';

const MainPage = () => {
  const { products, isLoading, isResolved, error } = useProducts();

  const TableLines = () => {
    if (isResolved)
      return products?.length ? (
        products.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.description}</td>
            <td>
              <Button variant="text">Contratar</Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6} align="center">
            <span>No products found</span>
          </td>
        </tr>
      );

    if (isLoading)
      return (
        <tr>
          <td colSpan={6} align="center">
            <Loading />
          </td>
        </tr>
      );

    return (
      <tr>
        <td colSpan={6} align="center">
          <span className={styles.Error}>{error}</span>
        </td>
      </tr>
    );
  };

  return (
    <div className={styles.MainPage} data-testid="MainPage">
      <main className={styles.Main}>
        <div className={styles.MainHeader}>
          <Widget color="green">
            <h1>Peça seu cartão Alelo!</h1>
            <img src={Cards} alt="Alelo cards" />
          </Widget>
        </div>

        <Table
          title="Conheça nossos produtos"
          headers={['produto', 'preço', 'categoria', 'descrição', '']}
        >
          {TableLines()}
        </Table>

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
