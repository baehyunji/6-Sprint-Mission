import styles from "./ToggleMenu.module.css";
import arrowDownImg from "../../assets/arrow-down.png";

const OPTIONS = {
  NEWEST: { label: "최신순", value: "newest" },
  MOST_LIKED: { label: "좋아요순", value: "likes" },
};

function ToggleMenu({ onClick, onToggleMenu, isOpen }) {
  return (
    <div className={styles.toggleMenu}>
      <button className={styles.iconButton} onClick={onToggleMenu}>
        <span className={styles.iconText}>최신순</span>
        <img src={arrowDownImg} alt="화살표 이미지"></img>
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <div className={styles.newestBtn}>
            <li
              className={styles.disabled}
              onClick={() => onClick(OPTIONS.NEWEST.value)}
            >
              <button>최신순</button>
            </li>
          </div>
          <li
            className={styles.disabled}
            onClick={() => onClick(OPTIONS.MOST_LIKED.value)}
          >
            <button>좋아요순</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ToggleMenu;
