import api from "../api";
import { IProduct } from "./IProduct";

const getProduct = async (id: number): Promise<IProduct> => {
  try {
    const { data } = await api.get(`/products/${id}`);
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export default getProduct;
