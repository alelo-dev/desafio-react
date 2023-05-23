import React from "react";
import styles from "./Table.module.scss";
import Button from "../Button/Button";

interface ProductProps {
  title: string;
  price: number;
  category: string;
  description: string;
}

interface ProductsProps {
  products: ProductProps[];
}

const Table: React.FC<ProductsProps> = ({ products }) => {
  const renderTableContent = () => (
    <>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Descrição</th>
          <th></th>
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
    </>
  );

  const renderLoadingMessage = () => (
    <div className={styles.renderMsg}>
      <span>Renderizando Tabela</span>
      <span>Aguarde...</span>
    </div>
  );

  return (
    <table className={styles.table}>
      {products.length > 0 ? renderTableContent() : renderLoadingMessage()}
    </table>
  );
};

export default Table;