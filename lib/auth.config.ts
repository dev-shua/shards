import { NextAuthConfig } from "next-auth";
import Discord from "next-auth/providers/discord";

export default {
  providers: [
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
