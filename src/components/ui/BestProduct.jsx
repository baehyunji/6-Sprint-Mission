import styles from "./BestProduct.module.css";
import favoriteImg from "../../assets/favorite.png";
import { Link } from "react-router-dom";

function BestProduct({ product }) {
  return (
    <div>
      <Link to={`/items/${product.id}`}>
        <img
          className={styles.bestItem__img}
          src={product.images[0]}
          alt={product.name}
        />
      </Link>
      <div>
        <h3 className={styles.best_name}>{product.name}</h3>
        <h2 className={styles.price}>{product.price}원</h2>
        <div className="favorite-contents">
          <img src={favoriteImg} alt="favorite-img" />
          <h3 className={styles.favorite}>{product.favoriteCount}</h3>
        </div>
      </div>
    </div>
  );
}

export default BestProduct;
