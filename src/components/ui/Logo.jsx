import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logoImg from "../../assets/logo.png";

function Logo() {
  return (
    <>
      <Link to="/">
        <img className={styles.logo} src={logoImg} alt="판다마켓 로고" />
      </Link>
    </>
  );
}

export default Logo;
