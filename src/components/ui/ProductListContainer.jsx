import ProductsList from "../ui/ProductsList";
import BestProductsList from "../ui/BestProductsList";
import styles from "./ProductListContainer.module.css";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import ToggleMenuContainer from "../container/ToggleMenuContainer";
import PaginationBar from "./PaginationBar";

function ProductListContainer({
  favoriteProducts,
  sortedProducts,
  searchText,
  handleToggleClick,
  setSearchText,
}) {
  return (
    <div className="products-list">
      <div>
        <h2 className={styles.best_product}>베스트 상품</h2>
        <BestProductsList products={favoriteProducts}></BestProductsList>
      </div>
      <div className={styles.search_container}>
        <h2>전체 상품</h2>
        <div className={styles.search_bar}>
          <form className={styles.search_bar__form}>
            <div className={styles.search_bar_wrapper}>
              <input
                name="keyword"
                placeholder=" 검색할 상품을 입력해주세요"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                autoComplete="off"
              ></input>
            </div>
            <Link to="/additem">
              <Button variant="productRagistration">상품 등록하기</Button>
            </Link>
          </form>
          <ToggleMenuContainer onClick={handleToggleClick} />
        </div>
      </div>
      <div>
        <ProductsList products={sortedProducts}></ProductsList>
      </div>
      <PaginationBar />
    </div>
  );
}

export default ProductListContainer;
