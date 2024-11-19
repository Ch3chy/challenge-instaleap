import Title from "@/components/title";
import styles from "./order.module.scss";
import { fetchStores } from "@/fetchers/stores.fetchers";
import { fetchOrder } from "@/fetchers/orders.fetchers";
import OrderClient from "./client";

type OrderProps = {
  params: { orderId: string };
};

export default async function Order(props: Readonly<OrderProps>) {
  const {
    params: { orderId },
  } = props;

  const order = await fetchOrder(parseInt(orderId));
  const stores = await fetchStores({ orderId });

  return (
    <section className={styles.order}>
      <Title>
        <strong>Seleccione</strong> Tienda
      </Title>
      <OrderClient order={order} stores={stores} />
    </section>
  );
}
