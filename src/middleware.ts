import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();

  const cookie = request.cookies.get("sessionId");

  if (!cookie) {
    response.cookies.set("sessionId", crypto.randomUUID());
  }
  return response;
};
