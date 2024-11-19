import { FC, ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  children: ReactNode;
  appearance?: "default" | "success" | "warning" | "info";
  fullWidth?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  appearance,
  fullWidth,
  className,
}) => {
  return (
    <button
      className={`${styles.button} ${
        appearance ? styles[`button__${appearance}`] : ""
      } ${fullWidth ? styles.button__fullwidth : ""} ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
