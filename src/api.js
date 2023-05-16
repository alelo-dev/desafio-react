const baseURL = 'https://fakestoreapi.com'

export const getLimitedProducts = async ({ limit }) => {
  let products = await fetch(`${baseURL}/products?limit=${limit}`).then(r => r.json());
  return products;
}
