import Tag from "@/components/tag";
import { Timer } from "@phosphor-icons/react/dist/ssr";
import { FC } from "react";
import styles from "./order-status.module.scss";
import { OrderStatus as OrderStatusType } from "../../types/orders.types";
import {
  STATUS_COLORS,
  STATUS_LABEL,
  SUB_STATUS_LABEL,
} from "../../constants/status.constants";
import { TagType } from "@/components/tag/tag.types";

type OrderStatusProps = {
  status: OrderStatusType;
  className?: string;
};

const OrderStatus: FC<OrderStatusProps> = ({ status, className }) => {
  const STATUS_COLOR = Object.keys(STATUS_COLORS).find((key) =>
    STATUS_COLORS[key as TagType].includes(status.id)
  ) as TagType;

  return (
    <div className={`${styles.status} ${className || ""}`}>
      <Tag type={STATUS_COLOR} className={styles.tag}>
        <Timer /> {STATUS_LABEL[status.id]}
      </Tag>
      <span
        className={`${styles.statusDetail} ${styles[`statusDetail__warning`]}`}
      >
        {SUB_STATUS_LABEL[status.subStatus]}
      </span>
    </div>
  );
};

export default OrderStatus;
