import { NextRequest, NextResponse } from "next/server";
import data from "@/mocks/stores.json";
import { QUERY_PARAMS_API_STORES } from "@/constants/query-params.constants";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const orderId = searchParams.get(QUERY_PARAMS_API_STORES.ORDER_ID);

  let stores = orderId
    ? (data as { ordersIds: number[] }[]).filter((item) =>
        item.ordersIds.includes(parseInt(orderId))
      )
    : data;

  return NextResponse.json(stores, { status: 200 });
}
