import Title from "@/components/title";
import styles from "./order.module.scss";
import { fetchStores } from "@/fetchers/stores.fetchers";
import { fetchOrder } from "@/fetchers/orders.fetchers";
import OrderClient from "./client";
import { storesWithDistanceMapper } from "../../mappers/stores.mappers";
import { notFound } from "next/navigation";

type OrderProps = {
  params: { orderId: string };
};

export default async function Order(props: Readonly<OrderProps>) {
  const {
    params: { orderId },
  } = props;

  const order = await fetchOrder(parseInt(orderId));
  const stores = await fetchStores({ orderId });

  if (!order) {
    notFound();
  }

  const storesWithDistances = storesWithDistanceMapper(
    stores,
    order.customer.coordinates
  );

  return (
    <section className={styles.order}>
      <Title>
        <strong>Seleccione</strong> Tienda
      </Title>
      <OrderClient order={order} stores={storesWithDistances} />
    </section>
  );
}
