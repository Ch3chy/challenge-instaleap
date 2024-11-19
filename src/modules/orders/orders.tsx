import Title from "@/components/title";
import styles from "./orders.module.scss";
import GridOrders from "./components/grid-orders";
import TicketOrder from "./components/ticket-order";
import { fetchOrders } from "@/fetchers/orders.fetchers";

export default async function Orders() {
  const orders = await fetchOrders();

  return (
    <section className={styles.orders}>
      <Title>
        <strong>Seleccione</strong> Pedido
      </Title>
      <GridOrders>
        {orders.map((order) => (
          <TicketOrder key={`order-${order.id}`} order={order} />
        ))}
      </GridOrders>
    </section>
  );
}
