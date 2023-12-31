import { ZodError } from "zod";
import { hash } from "bcryptjs";
import { db } from "@/lib/db/drizzle";
import {
  RegisterUserInput,
  RegisterUserSchema,
} from "@/lib/validations/user.schema";
import { getErrorResponse } from "@/lib/helper";
import { jwt_users } from "@/lib/db/schema/script";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegisterUserInput;
    const data = RegisterUserSchema.parse(body);
    const hashPassword = await hash(data.password, 12);

    // check if email already exist
    const userEmail = await db
      .select({
        email: jwt_users.email,
      })
      .from(jwt_users)
      .where(eq(jwt_users.email, data.email));

    if (userEmail.length > 0) {
      return getErrorResponse(409, "Email already exist");
    }

    const user = await db
      .insert(jwt_users)
      .values({
        name: data.name,
        email: data.email,
        password: hashPassword,
      })
      .returning();

    return new NextResponse(
      JSON.stringify({
        status: "success",
        data: { data: { ...user[0], password: undefined } },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    if (error instanceof ZodError) {
      return getErrorResponse(400, "failed validtaion", error);
    }
    if (error.code === "23505") {
      return getErrorResponse(409, "user with that email already exists");
    }
    return getErrorResponse(500, error.message);
  }
}
