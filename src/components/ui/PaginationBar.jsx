import styles from "./PaginationBar.module.css";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";

function PaginationBar() {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className={styles.paginationBar}>
      <button className={styles.paginationButton}>
        <img src={arrowLeft} alt="왼쪽 화살표" />
      </button>
      {pages.map((page) => (
        <button className={styles.paginationButton}>{page}</button>
      ))}
      <button className={styles.paginationButton}>
        <img src={arrowRight} alt="오른쪽 화살표" />
      </button>
    </div>
  );
}

export default PaginationBar;
