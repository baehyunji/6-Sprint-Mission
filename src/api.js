import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  timeout: 3000,
});

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await instance.get(`/products?${query}`);
  return res.data;
}

export async function getProduct(productId) {
  const res = await instance.get(`/products/${productId}`);
  return res.data;
}

export async function getComment({ productId, params }) {
  const query = new URLSearchParams(params).toString();
  const res = await instance.get(`/products/${productId}/comments?${query}`);
  return res.data;
}
