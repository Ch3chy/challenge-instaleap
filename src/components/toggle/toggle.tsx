import { ChangeEvent, FC, ReactNode } from "react";
import styles from "./toggle.module.scss";

type ToggleProps = {
  children: ReactNode;
  className?: string;
  onChange?: (checked: boolean) => void;
};

const Toggle: FC<ToggleProps> = ({ children, className, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(!!e.target.checked);
  };

  return (
    <label className={`${styles.toggle} ${className || ""}`}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={handleChange}
      />
      {children}
    </label>
  );
};

export default Toggle;
