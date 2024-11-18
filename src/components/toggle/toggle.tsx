import { FC, ReactNode } from "react";
import styles from "./toggle.module.scss";

type ToggleProps = {
  children: ReactNode;
  className?: string;
};

const Toggle: FC<ToggleProps> = ({ children, className }) => {
  return (
    <label className={`${styles.toggle} ${className || ""}`}>
      <input type="checkbox" className={styles.checkbox} />
      {children}
    </label>
  );
};

export default Toggle;
