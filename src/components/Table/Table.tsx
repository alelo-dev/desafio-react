import React from "react";
import styles from "./Table.module.scss";
import Button from "../Button/Button";

// interface define os tipos que products deve receber
interface ProductProps {
  title: string;
  price: number;
  category: string;
  description: string;
}
//productsProp array de ProductProps
interface ProductsProps {
  products: Array<ProductProps>;
}

const Table = ({ products }: ProductsProps) => {
  return products.length > 0 ? (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Produto</td>
          <td>Preço</td>
          <td>Categoria</td>
          <td>Descrição</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {products.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.description}</td>
            <td>
              <Button color="#0E7F61" text="Contratar" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className={styles.renderMsg}>
      <span>Renderizando Tabela</span>
      <span>Aguarde...</span>
    </div>
  );
};

export default Table;
