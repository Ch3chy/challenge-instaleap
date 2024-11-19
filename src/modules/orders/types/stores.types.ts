import { Coordinates } from "@/types/map.types";

export type Store = {
  id: number;
  name: string;
  address: string;
  isOpen: boolean;
  coordinates: Coordinates;
  nextDeliveryTime: DeliveryTime;
  ordersIds: number[];
};

export type DeliveryTime = {
  from: string;
  to: string;
};

export type StoresPayload = {
  orderId?: string;
};
