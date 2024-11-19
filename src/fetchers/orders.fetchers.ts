import { orderResponseToOrders } from "@/modules/orders/mappers/orders.mappers";
import { Order } from "@/modules/orders/types/orders.types";
import { getServiceUrl } from "@/utils/env.utils";

export const fetchOrders = (): Promise<Order[]> => {
  const URL_SERVICE = `orders`;

  const serviceUrl = `${getServiceUrl()}/${URL_SERVICE}`;

  return fetch(serviceUrl)
    .then((res) => res.json())
    .then((data) => orderResponseToOrders(data));
};
