"use client";

import { AdvancedMarker, APIProvider, Map, Pin } from "@vis.gl/react-google-maps";
import { FC } from "react";
import styles from "./map-stores.module.scss";
import { Storefront } from "@phosphor-icons/react";

type MapStoresProps = {
  className?: string;
};

const MapStores: FC<MapStoresProps> = ({ className }) => {
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
          <AdvancedMarker
            position={{ lat: 4.6892732, lng: -74.0976512 }}
            title={"AdvancedMarker with custom html content."}
          >
            <Pin background={"#2cde73"} borderColor={"#030303"} scale={1.5}>
              <Storefront className={styles.market} weight="fill" />
            </Pin>
          </AdvancedMarker>

          <AdvancedMarker
            position={{ lat: 4.7372143, lng: -74.0588878 }}
            title={"AdvancedMarker with custom html content."}
          >
            <Pin background={"#ffedbd"} borderColor={"#adadad"}>
              <Storefront className={styles.market} weight="fill" />
            </Pin>
          </AdvancedMarker>

          <AdvancedMarker
            position={{ lat: 4.6600712, lng: -74.0613822 }}
            title={"AdvancedMarker with custom html content."}
          >
            <Pin background={"#ffedbd"} borderColor={"#adadad"}>
              <Storefront className={styles.market} weight="fill" />
            </Pin>
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapStores;
