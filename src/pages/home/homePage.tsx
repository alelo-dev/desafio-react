import { useEffect, useState } from "react";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import { getLimitedProducts } from "../../api";
import { Results } from "./type";

import "../../styles/pages/homePage.scss";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [arrProductsList, setArrProductsList] = useState<any>([]);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const response: Results = await getLimitedProducts({
          limit: 5,
        });
        setArrProductsList(response);
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const RowsTable = () => {
    const arr: any = [];

    type product = {
      title: string;
      price: string;
      category: string;
      description: string;
    };

    arrProductsList.forEach((product: product, index: number) => {
      arr.push(
        <tr key={index}>
          <td>{product.title}</td>
          <td>${product.price}</td>
          <td>{product.category}</td>
          <td>{product.description}</td>
          <td>
            <button
              className="button-to-hire"
              onClick={() => alert("Contratar")}>
              Contratar
            </button>
          </td>
        </tr>
      );
    });

    return arr;
  };

  if (loading) {
    return <h3 className="loading">Loading</h3>;
  }

  return (
    <div id="home-page" data-testid="HomePage">
      <div className="row-widget">
        <Widget widget="special-offer" />
      </div>
      <section className="products">
        <h5>Conheça nossos produtos!</h5>
        <div className="wrapper-table">
          <Table
            header={["produto", "preço", "categoria", "descrição", ""]}
            rows={RowsTable()}
          />
        </div>
      </section>

      <div className="row-widgets">
        <Widget widget="card" />
        <Widget widget="info" />
      </div>
    </div>
  );
};

export default HomePage;
