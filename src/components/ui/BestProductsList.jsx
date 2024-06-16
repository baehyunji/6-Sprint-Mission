import styles from "./BestProductsList.module.css";
import "./global.css";
import BestProduct from "./BestProduct";

function BestProductsList({ products }) {
  const limitedFavoriteProducts = products.slice(0, 4);
  return (
    <ul className={styles.bestProductsList}>
      {limitedFavoriteProducts.map((product) => {
        return (
          <li key={product.id}>
            <BestProduct product={product} />
          </li>
        );
      })}
    </ul>
  );
}

export default BestProductsList;
