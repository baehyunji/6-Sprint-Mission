import { NavLink, useLocation } from "react-router-dom";
import Container from "../container/Container";
import styles from "./Nav.module.css";
import Logo from "./Logo";
import Button from "./Button";
import userIcon from "../../assets/userIcon.png";

function Nav() {
  const location = useLocation();

  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <ul className={styles.menu}>
          <Logo />
          <li className={styles.item}>
            <NavLink
              to="/free"
              style={({ isActive }) => {
                return {
                  color:
                    isActive && location.pathname === "/free" ? "#3692ff" : "",
                };
              }}
              className={styles.link}
            >
              자유게시판
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/items"
              style={({ isActive }) => {
                return {
                  color:
                    isActive || location.pathname === "/additem"
                      ? "#3692ff"
                      : "",
                };
              }}
              className={styles.link}
            >
              중고마켓
            </NavLink>
          </li>
        </ul>
        {location.pathname === "/additem" ? (
          <img src={userIcon} alt="유저 아이콘"></img>
        ) : (
          <Button variant="login">로그인</Button>
        )}
      </Container>
    </div>
  );
}

export default Nav;
