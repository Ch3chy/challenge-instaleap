import { FC, ReactNode } from "react";
import styles from "./grid-stores.module.scss";

type GridStoresProps = {
  children: ReactNode;
  className?: string;
};

const GridStores: FC<GridStoresProps> = ({ children, className }) => {
  return (
    <div className={`${styles.gridContainer} ${!!className && className}`}>
      <div className={`${styles.gridStores}`}>{children}</div>
    </div>
  );
};

export default GridStores;
