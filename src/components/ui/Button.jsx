import styles from "./Button.module.css";

function Button({ onClick, children, variant, type }) {
  const buttonClassName = `${styles.button} ${styles[variant] || ""}`;

  return (
    <>
      <button className={buttonClassName} onClick={onClick} type={type}>
        {children}
      </button>
    </>
  );
}

export default Button;
