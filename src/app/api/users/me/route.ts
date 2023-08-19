import { eq } from "drizzle-orm";
import { db } from "@/lib/db/drizzle";
import { getErrorResponse } from "@/lib/helper";
import { jwt_users } from "@/lib/db/schema/script";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userId = await request.headers.get("X-USER-ID");

  if (!userId) {
    return getErrorResponse(
      401,
      "you are not logged in, Please provide token to gain access"
    );
  }

  const user = await db
    .select()
    .from(jwt_users)
    .where(eq(jwt_users.user_id, Number(userId)));

  return NextResponse.json({
    status: "success",
    data: { user: { ...user[0], password: undefined } },
  });
}
