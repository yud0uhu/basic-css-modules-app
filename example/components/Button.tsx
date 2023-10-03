import { useState } from "react";
import styles from "../styles/button.module.css";
const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`${styles.buttonWrapper} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      <span className={styles.icon}>🐻</span>
      Click me
    </button>
  );
};

export default Button;
