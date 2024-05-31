import styles from "./BestProduct.module.css";
import favoriteImg from "../../assets/favorite.png";

function BestProduct({ product }) {
  return (
    <div>
      <img
        className={styles.bestItem__img}
        src={product.images[0]}
        alt={product.name}
      />
      <div>
        <h3 className={styles.best_description}>{product.description}</h3>
        <h2>{product.price}원</h2>
        <div className="favorite-contents">
          <img src={favoriteImg} alt="favorite-img" />
          <h3>{product.favoriteCount}</h3>
        </div>
      </div>
    </div>
  );
}

export default BestProduct;
