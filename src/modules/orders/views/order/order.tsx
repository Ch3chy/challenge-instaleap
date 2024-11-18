import Title from "@/components/title";
import styles from "./order.module.scss";
import MapStores from "../../components/map-stores";
import Toggle from "@/components/toggle";
import { ArrowsDownUp, Timer } from "@phosphor-icons/react/dist/ssr";
import Store from "../../components/store";
import GridStores from "../../components/grid-stores";

export default function Order() {
  return (
    <section className={styles.order}>
      <Title>
        <strong>Seleccione</strong> Tienda
      </Title>
      <div className={styles.orderLayout}>
        <div className={styles.stores}>
          <div className={styles.filters}>
            <Toggle>
              Abiertas <Timer />
            </Toggle>
            <Toggle>
              Mas cercanas <ArrowsDownUp weight="bold" />
            </Toggle>
          </div>
          <div className={styles.list}>
            <GridStores className={styles.listGrid}>
              <Store name="tienda" />
              <Store name="tienda" />
              <Store name="tienda" />
              <Store name="tienda" />
              <Store name="tienda" />
            </GridStores>
          </div>
        </div>
        <div className={styles.map}>
          <MapStores className={styles.mapStores} />
        </div>
      </div>
    </section>
  );
}
