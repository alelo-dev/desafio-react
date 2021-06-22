import { api } from "./api";

export const getProduct = async (payload: number) => {
  try {
    const {data, status} = await api.get(`/products/${payload}`)
    return { data, status}
  } catch (error) {
    return error
  }
}