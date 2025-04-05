import NextAuth from "next-auth";
import authConfig from "./config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { generateUniqueHexTag } from "../users";

const prisma = new PrismaClient();
const baseAdapter = PrismaAdapter(prisma);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: {
    ...baseAdapter,
    async createUser(data) {
      const tag = await generateUniqueHexTag();
      return prisma.user.create({
        data: {
          ...data,
          tag: tag,
        },
      });
    },
  },
  session: { strategy: "database" },
  ...authConfig,
});
