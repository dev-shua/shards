import { User } from "@prisma/client";
import { NextAuthConfig } from "next-auth";
import Discord from "next-auth/providers/discord";

export default {
  providers: [
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.username = (user as User).username;
      return session;
    },
  },
} satisfies NextAuthConfig;
