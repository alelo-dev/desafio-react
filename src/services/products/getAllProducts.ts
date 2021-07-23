import api from "../api";
import { IProducts } from "./IProduct";

const getAllProducts = async (): Promise<IProducts> => {
  try {
    const { data } = await api.get("/products");
    return { data };
  } catch (error) {
    throw Error(error);
  }
};

export default getAllProducts;
