import { Customer } from "@/types/customers.types";
import { Product } from "./products.types";
import { Status, SubStatus } from "./status.constants";

export type Order = {
  id: number;
  customer: Customer;
  totalOrder: string;
  products: Product[];
  status: OrderStatus;
  createdAt: Date;
};

export type OrderStatus = {
  id: Status;
  subStatus: SubStatus;
};

export type OrderResponse = Omit<Order, "createdAt"> & { createdAt: string };
