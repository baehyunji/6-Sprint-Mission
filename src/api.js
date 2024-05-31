import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  timeout: 3000,
});

export async function getProducts() {
  const res = await instance.get("/products/");
  return res.data;
}
