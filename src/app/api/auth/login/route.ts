import { eq } from "drizzle-orm";
import { compare } from "bcryptjs";
import { ZodError } from "zod";
import { db } from "@/lib/db/drizzle";
import { signJWT } from "@/lib/token";
import { jwt_users } from "@/lib/db/schema/script";
import { NextRequest, NextResponse } from "next/server";
import { getEnvVariable, getErrorResponse } from "@/lib/helper";
import { LoginUserInput, LoginUserSchema } from "@/lib/validations/user.schema";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoginUserInput;
    const data = LoginUserSchema.parse(body);

    const user = await db
      .select({
        user_id: jwt_users.user_id,
        passwrod: jwt_users.password,
      })
      .from(jwt_users)
      .where(eq(jwt_users.email, data.email));

    if (!user[0] || !(await compare(data.password, user[0].passwrod))) {
      return getErrorResponse(401, "Invalid email or password");
    }

    const JWT_EXPIRES_IN = getEnvVariable("JWT_EXPIRES_IN");
    const token = await signJWT(
      { sub: `${user[0].user_id}` },
      { exp: `${JWT_EXPIRES_IN}m` }
    );

    const response = new NextResponse(
      JSON.stringify({
        status: "success",
        token: token,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

    const tokenMaxAge = parseInt(JWT_EXPIRES_IN) * 60;
    const cookiesOptions = {
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV !== "development",
      maxAge: tokenMaxAge,
    };
    await Promise.all([
      response.cookies.set(cookiesOptions),
      response.cookies.set({
        name: "logged-in",
        value: "true",
        maxAge: tokenMaxAge,
      }),
    ]);
    return response;
  } catch (error: any) {
    if (error instanceof ZodError) {
      return getErrorResponse(400, "failed validations", error);
    }
    return getErrorResponse(500, error.message);
  }
}
