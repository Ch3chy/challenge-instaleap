import { ChangeEvent, FC } from "react";
import styles from "./store.module.scss";
import Tag from "@/components/tag";
import { Timer } from "@phosphor-icons/react/dist/ssr";
import { Store as StoreType } from "../../types/stores.types";
import { getTextInitials } from "@/utils/strings.utils";
import dayjs from "dayjs";

type StoreProps = {
  store: StoreType;
  name?: string;
  className?: string;
  onChange?: (checked: boolean) => void;
};

const Store: FC<StoreProps> = ({ store, name, className, onChange }) => {
  const avatarText = getTextInitials(store.name);

  const times = {
    from: dayjs(`1/1/1 ${store.nextDeliveryTime.from}`).format("hh:mm a"),
    to: dayjs(`1/1/1 ${store.nextDeliveryTime.to}`).format("hh:mm a"),
  };

  const handleChangeStore = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange && onChange(e.target.checked);
  };

  return (
    <article className={`${styles.store} ${className || ""}`}>
      {name && (
        <span className={styles.radio}>
          <input
            name={name}
            type="radio"
            value={store.id}
            className={styles.radio}
            disabled={!store.isOpen}
            onChange={handleChangeStore}
          />
        </span>
      )}
      <div className={styles.avatar}>{avatarText}</div>
      <div className={styles.info}>
        <header className={styles.header}>
          <h2 className={styles.title}>{store.name}</h2>
          <Tag type={store.isOpen ? "info" : "warning"}>
            <Timer /> {store.isOpen ? "Abierto" : "Cerrado"}
          </Tag>
        </header>
        <div className={styles.address}>{store.address}</div>
        <div className={styles.hours}>
          <strong>Entrega:</strong> {times.from} a {times.to}
        </div>
      </div>
    </article>
  );
};

export default Store;
