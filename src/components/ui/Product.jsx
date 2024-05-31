import styles from "./Product.module.css";
import favoriteImg from "../../assets/favorite.png";

function Product({ product }) {
  return (
    <div className="products-list-item">
      <img
        className={styles.productImg}
        src={product.images[0]}
        alt={product.name}
      />
      <div>
        <h3 className={styles.description}>{product.description}</h3>
        <h2>{product.price}원</h2>
        <div className="favorite-contents">
          <img src={favoriteImg} alt="favorite-img" />
          <h3>{product.favoriteCount}</h3>
        </div>
      </div>
    </div>
  );
}

export default Product;
