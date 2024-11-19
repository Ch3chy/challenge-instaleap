import { NextResponse } from "next/server";
import data from "@/mocks/order.json";

export async function GET() {
  return NextResponse.json(data, { status: 200 });
}
