import { FC } from "react";
import styles from "./ticket-order.module.scss";
import OrderStatus from "../order-status";
import OrderDate from "../order-date";
import OrderDetail from "../order-detail";
import Button from "@/components/button";

type TicketOrderProps = {
  className?: string;
};

const TicketOrder: FC<TicketOrderProps> = ({ className }) => {
  return (
    <article className={`${styles.ticket} ${className || ""}`}>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <div className={styles.avatar}>SA</div>
          <div className={styles.info}>
            <h3 className={styles.order}>
              Order <strong>#542</strong>
            </h3>
            <p className={styles.name}>Sergio Alfonso</p>
          </div>
        </div>
        <OrderStatus />
      </header>
      <OrderDate date={new Date()} />
      <hr className={styles.separator} />
      <OrderDetail />
      <hr className={styles.separator} />
      <div className={styles.totals}>
        <strong>Total</strong>
        <span className={styles.total}>$57.800</span>
      </div>
      <footer className={styles.footer}>
        <Button appearance="success" fullWidth>Seleccionar</Button>
      </footer>
    </article>
  );
};

export default TicketOrder;
