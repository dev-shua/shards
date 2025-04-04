import { prisma } from "../db/prisma";

export const getUserTables = async (userId: string) => {
  const ownedTables = await prisma.table.findMany({
    where: {
      ownerId: userId,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      createdAt: true,
      ownerId: true,
    },
  });

  const joinedPlayers = await prisma.player.findMany({
    where: { userId },
    select: {
      table: {
        select: {
          id: true,
          name: true,
          slug: true,
          createdAt: true,
          ownerId: true,
        },
      },
    },
  });

  const joinedTables = joinedPlayers.map((p) => p.table);
  const allTables = { owned: ownedTables, joined: joinedTables };

  return allTables;
};
