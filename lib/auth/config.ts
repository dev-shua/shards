import { NextAuthConfig } from "next-auth";
import Discord from "next-auth/providers/discord";
import { AdapterUserWithUsername } from "../types/auth";

export default {
  providers: [
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const safeUser = user as AdapterUserWithUsername;
      session.user.id = safeUser.id;
      session.user.username = safeUser.username ?? null;
      session.user.tag = user.tag;
      return session;
    },
  },
} satisfies NextAuthConfig;
