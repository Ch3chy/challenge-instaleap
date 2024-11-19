import { Coordinates } from "@/types/map.types";
import { Store } from "../types/stores.types";
import { getDistanceBetweenCoordinates } from "@/utils/maps.utils";

export const storesWithDistanceMapper = (
  stores: Store[],
  point: Coordinates
): Store[] => {
  return stores.map((store) => ({
    ...store,
    distance: getDistanceBetweenCoordinates(store.coordinates, point),
  }));
};
