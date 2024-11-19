import { FC } from "react";
import styles from "./tag.module.scss";
import { TagProps } from "./tag.types";

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
