export enum Status {
  PROGRESS = "PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  SHIPPED = "SHIPPED",
}

export enum SubStatus {
  READY_TO_SEND = "READY_TO_SEND",
  DELIVERED = "DELIVERED",
  USER_CANCELLED = "USER_CANCELLED",
  IN_TRANSIT = "IN_TRANSIT",
  PREPARING = "PREPARING",
  WAITING_FOR_PAYMENT = "WAITING_FOR_PAYMENT",
}