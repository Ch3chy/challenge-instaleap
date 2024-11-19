import { getServiceUrl } from "@/config/utils/env.utils";
import { QUERY_PARAMS_API_STORES } from "@/constants/query-params.constants";
import { Store, StoresPayload } from "@/modules/orders/types/stores.types";

export const fetchStores = (payload: StoresPayload): Promise<Store[]> => {
  const URL_SERVICE = `stores`;

  const serviceUrl = `${getServiceUrl()}/${URL_SERVICE}?${new URLSearchParams({
    ...(payload.orderId
      ? { [QUERY_PARAMS_API_STORES.ORDER_ID]: payload.orderId }
      : {}),
  }).toString()}`;

  return fetch(serviceUrl)
    .then((res) => res.json())
    .catch(() => []);
};
