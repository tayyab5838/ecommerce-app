import { SignJWT } from "jose";
import { getEnvVariable } from "./helper";

export const signJWT = async (
  payload: { sub: string },
  option: { exp: string }
) => {
  try {
    const secret = new TextEncoder().encode(getEnvVariable("JWT_SECRET_KEY"));

    const alg = "HS256";
    return new SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime(option.exp)
      .setIssuedAt()
      .setSubject(payload.sub)
      .sign(secret);
  } catch (error) {
    throw error;
  }
};
