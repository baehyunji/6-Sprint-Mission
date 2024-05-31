import ProductListContainer from "../ui/ProductListContainer";
import { useState, useEffect } from "react";
import { getProducts } from "../../api";

function ListContainer() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const sortedProducts = products.sort((a, b) => b[order] - a[order]);

  const handleLoad = async () => {
    try {
      const { list } = await getProducts();
      setProducts(list);
    } catch (e) {
      if (e.response) {
        console.log(e.response.status);
        console.log(e.response.data);
      } else {
        console.log("리퀘스트가 실패했습니다.");
      }
    }
  };

  useEffect(() => {
    handleLoad();
  }, [order]);

  useEffect(() => {
    const sortedFavoriteProducts = [...products].sort(
      (a, b) => b.favoriteCount - a.favoriteCount
    );
    setFavoriteProducts(sortedFavoriteProducts);
  }, [products]);

  const handleToggleClick = (option) => {
    if (option === "newest") {
      setOrder("createdAt");
    } else if (option === "likes") {
      setOrder("favoriteCount");
    }
  };
  return (
    <ProductListContainer
      favoriteProducts={favoriteProducts}
      sortedProducts={sortedProducts}
      searchText={searchText}
      handleToggleClick={handleToggleClick}
      setSearchText={setSearchText}
    />
  );
}

export default ListContainer;
