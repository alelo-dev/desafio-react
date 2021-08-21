import React, { useEffect, useState } from "react";
import Widget from "../components/Widget/Widget";
import styles from "./MainPage.module.scss";
import Table from "../components/Table/Table";
import useFetch from "../services/useFetch";

const MainPage = () => {
  /**
   * TODO: criar um crud para buscar, listar, enviar e atualizar produtos da https://fakestoreapi.com/
   *  */

  const { data, error, request } = useFetch();

  useEffect (() => {
    const url = 'https://fakestoreapi.com/products/?limit=5';
    const options = {
      method: "GET"
    };
    request(url, options);    
    
  }, [request]);

  if(error) {
    return (
      <div className={styles.errorMsg}>
        Ocorreu um erro inesperado.
      </div>
    )
  }
 
  if(data) { 
    return (
      <div className={styles.MainPage} data-testid="MainPage">
        <div className={styles.App}>
          <div className={styles.header}>
            <Widget widget="promo" />
          </div>
  
          <div className={styles.container}>
            <h5>Conheça nossos produtos!</h5>
            <Table products={data}></Table>             
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
  }else return null
};

 
export default MainPage;
