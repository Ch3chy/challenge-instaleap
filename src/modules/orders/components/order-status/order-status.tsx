import Tag from "@/components/tag";
import { Timer } from "@phosphor-icons/react/dist/ssr";
import { FC } from "react";
import styles from "./order-status.module.scss";

type OrderStatusProps = {
  className?: string;
};

const OrderStatus: FC<OrderStatusProps> = ({ className }) => {
  return (
    <div className={`${styles.status} ${className || ""}`}>
      <Tag type="warning" className={styles.tag}>
        <Timer /> En progreso
      </Tag>
      <span
        className={`${styles.statusDetail} ${styles[`statusDetail__warning`]}`}
      >
        Listo para enviar
      </span>
    </div>
  );
};

export default OrderStatus;
