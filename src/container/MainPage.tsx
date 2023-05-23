import { useEffect, useState } from "react";
import Widget from "../components/Widget";
import styles from "./MainPage.module.scss";
import Table from "../components/Table/Table";
import useFetch from "../services/useFetch";

const MainPage = () => {
  const { data, error, request } = useFetch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://fakestoreapi.com/products/?limit=5";
      const options = {
        method: "GET",
      };
      await request(url, options);
      setProducts(data);
    };

    fetchProducts();
  }, [data, request]);

  if (error) {
    return <div className={styles.errorMsg}>Ocorreu um erro.</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className={styles.MainPage} data-testid="MainPage">
      <div className={styles.Container}>
        <div className={styles.header}>
          <Widget widget="promo" />
        </div>

        <div className={styles.content}>
          <h5>Conheça nossos produtos!</h5>
          <Table products={products.length > 0 ? products : data} />
        </div>

        <div className={styles.footer}>
          <div>
            <Widget widget="card" />
          </div>
          <div>
            <Widget widget="info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;