import { Order, OrderResponse } from "../types/orders.types";

export const orderResponseToOrders = (data: OrderResponse[]): Order[] => {
  return data.map((item) => ({
    ...item,
    createdAt: new Date(item.createdAt),
  }));
};
