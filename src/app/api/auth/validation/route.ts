import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const hasToken = request.cookies.get("logged-in")?.value;

  const responseData = {
    isAuthenticated: hasToken,
  };
  const response = new NextResponse(JSON.stringify(responseData), {
    status: 200,
    headers: { "Content-Type": "applicatin/json" },
  });

  return response;
}
