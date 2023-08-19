import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = new NextResponse(JSON.stringify({ ststus: "success" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });

  await Promise.all([
    response.cookies.set({
      name: "token",
      value: "",
      maxAge: -1,
    }),
    response.cookies.set({
      name: "logged-in",
      value: "",
      maxAge: -1,
    }),
  ]);
  return response;
}