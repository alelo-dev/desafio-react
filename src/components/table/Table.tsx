import React from "react";
import "../../styles/components/table.scss";

const Table = () => {
  const TableLines = () => {
    const arr: any = [];

    products.forEach((p: any, index) => {
      arr.push(
        <tr key={index}>
          <td>{p["name"]}</td>
          <td>{p["price"]}</td>
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
      name: "produto 01",
      price: 1234,
    },
    {
      name: "produto 02",
      price: 1234,
    },
    {
      name: "produto 03",
      price: 1234,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{TableLines()}</tbody>
    </table>
  );
};

export default React.memo(Table);
