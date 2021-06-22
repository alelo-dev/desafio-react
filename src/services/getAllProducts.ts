import { api } from "./api";

export const getAllProducts = async () => {
  try {
    const {data, status} = await api.get('/products')
    return { data, status}
  } catch (error) {
    return error
  }
}