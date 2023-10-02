import { useState } from "react";
import styles from "../styles/button.module.css";
const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      Click me
    </button>
  );
};

export default Button;
