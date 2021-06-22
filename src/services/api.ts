import axios from "axios";

const url = 'https://fakestoreapi.com'

export const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL ||
    url
})