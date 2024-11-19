import { Coordinates } from "@/types/map.types";

export const degreesToRadians = (grados: number) => {
  return (grados * Math.PI) / 180;
};

export const getDistanceBetweenCoordinates = (
  point1: Coordinates,
  point2: Coordinates
) => {
  const RADIUS_EARTH_KMT = 6371;

  const lat1 = degreesToRadians(point1.lat);
  const lng1 = degreesToRadians(point1.lng);

  const lat2 = degreesToRadians(point2.lat);
  const lng2 = degreesToRadians(point2.lng);

  const diffLngs = lng2 - lng1;
  const diffLats = lat2 - lat1;

  const a =
    Math.pow(Math.sin(diffLats / 2.0), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(diffLngs / 2.0), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return RADIUS_EARTH_KMT * c;
};
