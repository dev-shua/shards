import { prisma } from "@/lib/db/prisma";

const generateRandomHexTag = (length = 5): string => {
  const chars = "0123456789ABCDEF";
  let tag = "";
  for (let i = 0; i < length; i++) {
    tag += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return tag;
};

export async function generateUniqueHexTag(): Promise<string> {
  let tag: string;
  let exists = true;

  while (exists) {
    tag = generateRandomHexTag();

    const existingUser = await prisma.user.findUnique({
      where: { tag: tag },
    });

    exists = existingUser !== null;
  }

  return tag!;
}
