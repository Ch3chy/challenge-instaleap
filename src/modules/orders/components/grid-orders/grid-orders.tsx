import { FC, ReactNode } from "react";
import styles from "./grid-orders.module.scss";

type GridOrdersProps = {
  children: ReactNode;
  className?: string;
};

const GridOrders: FC<GridOrdersProps> = ({ children, className }) => {
  return (
    <div className={styles.gridContainer}>
      <div className={`${styles.gridProducts} ${!!className && className}`}>
        {children}
      </div>
    </div>
  );
};

export default GridOrders;
