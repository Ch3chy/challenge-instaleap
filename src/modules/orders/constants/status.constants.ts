import { TagType } from "@/components/tag/tag.types";
import { Status, SubStatus } from "../types/status.constants";

export const STATUS_LABEL: { [key in Status]: string } = {
  [Status.PROGRESS]: "En progreso",
  [Status.COMPLETED]: "Completado",
  [Status.CANCELLED]: "Cancelado",
  [Status.SHIPPED]: "Enviado",
};

export const SUB_STATUS_LABEL: { [key in SubStatus]: string } = {
  [SubStatus.DELIVERED]: "Entregado",
  [SubStatus.IN_TRANSIT]: "En ruta de reparto",
  [SubStatus.PREPARING]: "Preparando la orden",
  [SubStatus.READY_TO_SEND]: "Listo para enviar",
  [SubStatus.USER_CANCELLED]: "Usuario cancelo orden",
  [SubStatus.WAITING_FOR_PAYMENT]: "Esperando pago",
};

export const STATUS_COLORS: { [key in TagType]: Status[] } = {
  default: [Status.CANCELLED],
  success: [],
  warning: [Status.PROGRESS, Status.SHIPPED],
  info: [Status.COMPLETED],
};
