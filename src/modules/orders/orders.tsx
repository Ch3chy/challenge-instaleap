import Title from "@/components/title";
import styles from "./orders.module.scss";
import GridOrders from "./components/grid-orders";
import TicketOrder from "./components/ticket-order";

export default function Orders() {
  return (
    <section className={styles.orders}>
      <Title>
        <strong>Seleccione</strong> Pedido
      </Title>
      <GridOrders>
        <TicketOrder />
        <TicketOrder />
        <TicketOrder />
        <TicketOrder />
      </GridOrders>
    </section>
  );
}
