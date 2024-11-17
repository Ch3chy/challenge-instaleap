import { NextRequest, NextResponse } from "next/server";
import { HEADERS } from "@/config/constants/request.constants";

const middleware = async (request: NextRequest) => {
  const headers = new Headers(request.headers);
  headers.set(HEADERS.href, request.nextUrl.href);

  return NextResponse.next({ headers });
};

export default middleware;
