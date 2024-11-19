"use client";

import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import { FC } from "react";
import styles from "./map-stores.module.scss";
import { Storefront } from "@phosphor-icons/react";
import { Store } from "../../types/stores.types";

type MapStoresProps = {
  stores: Store[];
  className?: string;
};

const MapStores: FC<MapStoresProps> = ({ stores, className }) => {
  return (
    <div className={`${styles.mapStores} ${className || ""}`}>
      <APIProvider apiKey={"AIzaSyDcJ7YSOekZS5tKBUICC0S4dNGlcyqO-78"}>
        <Map
          defaultCenter={{ lat: 4.6892732, lng: -74.0976512 }}
          defaultZoom={12}
          mapId={"739af084373f96fe"}
          mapTypeId={"roadmap"}
          styles={undefined}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          className={styles.map}
        >
          {stores.map((store) => (
            <AdvancedMarker
              position={store.coordinates}
              title={"AdvancedMarker with custom html content."}
            >
              <Pin
                background={store.isOpen ? "#2cde73" : "#ffedbd"}
                borderColor={store.isOpen ? "#030303" : "#adadad"}
              >
                <Storefront className={styles.market} weight="fill" />
              </Pin>
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapStores;
