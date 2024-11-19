"use client";

import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";
import { FC, useEffect } from "react";
import styles from "./map-stores.module.scss";
import { ApplePodcastsLogo, Storefront } from "@phosphor-icons/react";
import { Store } from "../../types/stores.types";
import { Coordinates } from "@/types/map.types";

type MapStoresProps = {
  customer: Coordinates;
  stores: Store[];
  store?: Store;
  className?: string;
};

const MapStores: FC<MapStoresProps> = ({
  customer,
  stores,
  store,
  className,
}) => {
  const MapControl = () => {
    const map = useMap();

    useEffect(() => {
      if (map && store) {
        map.setCenter(store.coordinates);
      }
    }, [map]);

    return null;
  };

  return (
    <div className={`${styles.mapStores} ${className || ""}`}>
      <APIProvider apiKey={"AIzaSyDcJ7YSOekZS5tKBUICC0S4dNGlcyqO-78"}>
        <Map
          defaultCenter={store?.coordinates || customer}
          defaultZoom={13}
          mapId={"739af084373f96fe"}
          mapTypeId={"roadmap"}
          styles={undefined}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          className={styles.map}
        >
          {stores.map((_store) => (
            <AdvancedMarker
              key={`${_store.coordinates.lat}-${_store.coordinates.lng}`}
              position={_store.coordinates}
            >
              <Pin
                background={
                  _store.isOpen
                    ? store?.id === _store.id
                      ? "#2cde73"
                      : "#c9ffe4"
                    : "#ffedbd"
                }
                borderColor={
                  _store.isOpen
                    ? store?.id === _store.id
                      ? "#030303"
                      : "#2cde73"
                    : "#adadad"
                }
                scale={store?.id === _store.id ? 1.25 : undefined}
              >
                <Storefront className={styles.market} weight="fill" />
              </Pin>
            </AdvancedMarker>
          ))}
          <AdvancedMarker position={customer}>
            <div className={styles.marketCenter}>
              <ApplePodcastsLogo weight="regular" />
            </div>
          </AdvancedMarker>
        </Map>
        <MapControl />
      </APIProvider>
    </div>
  );
};

export default MapStores;
