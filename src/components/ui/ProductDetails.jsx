import styles from "../ui/ProductDetails.module.css";
import heartIcon from "../../assets/heart.png";

function ProductDetails({ product }) {
  return (
    <div className={styles.productWrapper}>
      <img
        className={styles.productImg}
        src={product.images[0]}
        alt={product.name}
      />
      <div className={styles.productContent}>
        <h2>{product.name}</h2>
        <h1>{product.price}원</h1>
        <p>상품 소개</p>
        <h3>{product.description}</h3>
        <p>상품 태그</p>
        <h3>#{product.tags}</h3>
        <button className={styles.favoriteTag}>
          <img src={heartIcon} alt="하트 아이콘" />
          {product.favoriteCount}
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
