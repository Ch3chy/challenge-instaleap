import { FC } from "react";
import styles from "./ticket-order.module.scss";
import OrderStatus from "../order-status";
import OrderDate from "../order-date";
import OrderDetail from "../order-detail";
import Button from "@/components/button";
import Link from "next/link";
import { Order } from "../../types/orders.types";

type TicketOrderProps = {
  order: Order;
  className?: string;
};

const TicketOrder: FC<TicketOrderProps> = ({ order, className }) => {
  const nameSplited = order.customer.name.split(" ");
  const avatarText =
    nameSplited.length >= 2
      ? `${nameSplited[0][0]}${nameSplited[1][0]}`
      : nameSplited.slice(0, 2);

  return (
    <article className={`${styles.ticket} ${className || ""}`}>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <div className={styles.avatar}>{avatarText}</div>
          <div className={styles.info}>
            <h3 className={styles.order}>
              Order <strong>#{order.id}</strong>
            </h3>
            <p className={styles.name}>{order.customer.name}</p>
          </div>
        </div>
        <OrderStatus status={order.status} />
      </header>
      <OrderDate date={order.createdAt} />
      <hr className={styles.separator} />
      <OrderDetail products={order.products} />
      <hr className={styles.separator} />
      <div className={styles.totals}>
        <strong>Total</strong>
        <span className={styles.total}>{order.totalOrder}</span>
      </div>
      <footer className={styles.footer}>
        <Link href={`/orders/${order.id}`}>
          <Button appearance="success" fullWidth>
            Seleccionar
          </Button>
        </Link>
      </footer>
    </article>
  );
};

export default TicketOrder;
