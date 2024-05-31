import styles from "./Product.module.css";
import favoriteImg from "../../assets/favorite.png";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="products-list-item">
      <Link to={`/items/${product.id}`}>
        <img
          className={styles.productImg}
          src={product.images[0]}
          alt={product.name}
        />
      </Link>
      <div>
        <h3 className={styles.name}>{product.name}</h3>
        <h2 className={styles.price}>{product.price}원</h2>
        <div className="favorite-contents">
          <img src={favoriteImg} alt="favorite-img" />
          <h3 className={styles.favorite}>{product.favoriteCount}</h3>
        </div>
      </div>
    </div>
  );
}

export default Product;
