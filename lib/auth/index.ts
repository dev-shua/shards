import NextAuth from "next-auth";
import authConfig from "./config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { generateUniqueHexTag } from "../users";
import type { AdapterUser } from "next-auth/adapters";

const prisma = new PrismaClient();
const baseAdapter = PrismaAdapter(prisma);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: {
    ...baseAdapter,
    async createUser(data) {
      const tag = await generateUniqueHexTag();
      const user = await prisma.user.create({
        data: {
          ...data,
          tag: tag,
        },
      });

      return user satisfies AdapterUser;
    },
  },
  session: { strategy: "database" },
  ...authConfig,
});
