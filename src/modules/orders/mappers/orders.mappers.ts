import { Order, OrderResponse } from "../types/orders.types";

export const orderResponseToOrder = (data: OrderResponse): Order => {
  return {
    ...data,
    createdAt: new Date(data.createdAt),
  };
};

export const orderResponseToOrders = (data: OrderResponse[]): Order[] => {
  return data.map((item) => orderResponseToOrder(item));
};
