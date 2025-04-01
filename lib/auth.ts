import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
});
