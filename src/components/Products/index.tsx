import { useState, useEffect } from "react";

// services
import getProduct from "../../services/products/getProduct";
import getAllProducts from "../../services/products/getAllProducts";
import { IProduct, IProducts } from "../../services/products/IProduct";

// ./
import styles from "./style.module.scss";

const Index: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>();

  const fetchProducts = async () => {
    console.log("teste");
    try {
      const { data } = await getAllProducts();
      setProducts(data);
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className={`fs-5 ${styles.title}`}>Conheça nossos produtos!</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Produto</th>
            <th scope="col">Preço</th>
            <th scope="col">Categoria</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;
