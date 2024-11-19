import { getServiceUrl } from "@/config/utils/env.utils";
import { orderResponseToOrders } from "@/modules/orders/mappers/orders.mappers";
import { Order } from "@/modules/orders/types/orders.types";

export const fetchOrder = (order: number): Promise<Order> => {
  const URL_SERVICE = `orders`;

  const serviceUrl = `${getServiceUrl()}/${URL_SERVICE}/${order}`;

  return fetch(serviceUrl)
    .then((res) => res.json())
    .catch(() => null);
};

export const fetchOrders = (): Promise<Order[]> => {
  const URL_SERVICE = `orders`;

  const serviceUrl = `${getServiceUrl()}/${URL_SERVICE}`;

  return fetch(serviceUrl)
    .then((res) => res.json())
    .then((data) => orderResponseToOrders(data))
    .catch(() => []);
};
