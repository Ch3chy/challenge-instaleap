import { FC } from "react";
import styles from "./order-detail.module.scss";
import { Product } from "../../types/products.types";

type OrderDetailProps = {
  products: Product[];
  className?: string;
};

const OrderDetail: FC<OrderDetailProps> = ({ products, className }) => {
  return (
    <div className={`${styles.order} ${className || ""}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th className={styles.quantity}>Cant.</th>
            <th className={styles.price}>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={`order-item-${product.id}`}>
              <td>{product.name}</td>
              <td className={styles.quantity}>{product.quantity}</td>
              <td className={styles.price}>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetail;
