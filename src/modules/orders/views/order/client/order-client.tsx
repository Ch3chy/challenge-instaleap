"use client";

import { Order } from "@/modules/orders/types/orders.types";
import { Store as StoreType } from "@/modules/orders/types/stores.types";
import { FC, useMemo, useState } from "react";
import styles from "./order-client.module.scss";
import Toggle from "@/components/toggle";
import { ArrowsDownUp, Timer } from "@phosphor-icons/react";
import GridStores from "@/modules/orders/components/grid-stores";
import Store from "@/modules/orders/components/store";
import MapStores from "@/modules/orders/components/map-stores";

type OrderClientProps = {
  order: Order;
  stores: StoreType[];
};

const OrderClient: FC<OrderClientProps> = ({ order, stores }) => {
  const [store, setStore] = useState<StoreType>();
  const [hideClosed, setHideClosed] = useState(false);
  const [sort, setSort] = useState(false);

  const filterStores = useMemo(() => {
    const _stores = stores.filter((store) =>
      hideClosed ? store.isOpen : true
    );
    if (!sort) return _stores;
    return _stores.sort((a, b) =>
      (a.distance || 0) > (b.distance || 0) ? 1 : -1
    );
  }, [stores, hideClosed, sort]);

  return (
    <div className={styles.orderLayout}>
      <div className={styles.stores}>
        <div className={styles.filters}>
          <Toggle onChange={setHideClosed}>
            Abiertas <Timer />
          </Toggle>
          <Toggle onChange={setSort}>
            Mas cercanas <ArrowsDownUp weight="bold" />
          </Toggle>
        </div>
        <div className={styles.list}>
          <GridStores className={styles.listGrid}>
            {filterStores.map((store) => (
              <Store
                key={`store-${store.id}`}
                store={store}
                name="tienda"
                onChange={(checked) => {
                  return checked && setStore(store);
                }}
              />
            ))}
          </GridStores>
        </div>
      </div>
      <div className={styles.map}>
        <MapStores
          customer={order.customer.coordinates}
          stores={stores}
          store={store}
          className={styles.mapStores}
        />
      </div>
    </div>
  );
};

export default OrderClient;
