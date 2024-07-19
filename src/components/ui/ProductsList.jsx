import styles from "./ProductsList.module.css";
import "./global.css";
import Product from "./Product";

function ProductsList({ products }) {
  return (
    <ul className={styles.ProductsList}>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Product product={product} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsList;
