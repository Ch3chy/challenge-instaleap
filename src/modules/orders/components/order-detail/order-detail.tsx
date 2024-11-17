import { FC } from "react";
import styles from "./order-detail.module.scss";

type OrderDetailProps = {
  className?: string;
};

const OrderDetail: FC<OrderDetailProps> = ({ className }) => {
  const items = [
    { name: "Producto #1", quantity: "2", price: "$25.000" },
    { name: "Producto pequeño", quantity: "1", price: "$12.300" },
    { name: "Producto mentiritas", quantity: "2", price: "$22.500" },
  ];

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
          {items.map((item, index) => (
            <tr key={`order-item-${index}`}>
              <td>{item.name}</td>
              <td className={styles.quantity}>{item.quantity}</td>
              <td className={styles.price}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetail;
