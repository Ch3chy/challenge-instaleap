import dayjs from "dayjs";
import { FC } from "react";
import styles from "./order-date.module.scss";

type OrderDateProps = {
  date: Date;
  className?: string;
};

const OrderDate: FC<OrderDateProps> = ({ date, className }) => {
  const dateString = dayjs(date).format("dddd, MMMM D, YYYY");
  const timeString = dayjs(date).format("h:mm A");

  return (
    <div className={`${styles.orderDate} ${className || ""}`}>
      {dateString}
      <span>{timeString}</span>
    </div>
  );
};

export default OrderDate;
