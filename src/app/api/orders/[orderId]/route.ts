import { NextResponse } from "next/server";
import data from "@/mocks/order.json";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  const orderId = (await params).orderId;

  const order = (data as { id: number }[]).find(
    (item) => String(item.id) === orderId
  );

  return NextResponse.json(order, { status: 200 });
}
