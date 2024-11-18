import { FC } from "react";
import styles from "./store.module.scss";
import Tag from "@/components/tag";
import { Timer } from "@phosphor-icons/react/dist/ssr";

type StoreProps = {
  name?: string;
  className?: string;
};

const Store: FC<StoreProps> = ({ name, className }) => {
  return (
    <article className={`${styles.store} ${className || ""}`}>
      {name && (
        <span className={styles.radio}>
          <input name={name} type="radio" className={styles.radio} />
        </span>
      )}
      <div className={styles.avatar}>TN</div>
      <div className={styles.info}>
        <header className={styles.header}>
          <h2 className={styles.title}>Terminal Norte</h2>
          <Tag type="info">
            <Timer /> Abierto
          </Tag>
        </header>
        <div className={styles.address}>Carrera 35 #123-56</div>
        <div className={styles.hours}>
          <strong>Entrega:</strong> 8:00 am a 8:59 am
        </div>
      </div>
    </article>
  );
};

export default Store;
