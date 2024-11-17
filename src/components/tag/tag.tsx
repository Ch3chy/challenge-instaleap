import { FC, ReactNode } from "react";
import styles from "./tag.module.scss";

type TagProps = {
  children: ReactNode;
  type?: "default" | "success" | "warning" | "info";
  className?: string;
};

const Tag: FC<TagProps> = ({ children, type, className }) => {
  return (
    <span
      className={`${styles.tag} ${styles[`tag__${type}`]} ${className || ""}`}
    >
      {children}
    </span>
  );
};

export default Tag;
