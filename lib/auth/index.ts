import NextAuth from "next-auth";
import authConfig from "./config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { generateUniqueHexTag } from "../users";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  ...authConfig,

  events: {
    async createUser({ user }) {
      const tag = await generateUniqueHexTag();

      await prisma.user.update({
        where: { id: user.id },
        data: { tag: tag },
      });
    },
  },
});
