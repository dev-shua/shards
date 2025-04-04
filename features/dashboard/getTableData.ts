import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db/prisma";
import { tableSidebarSelect } from "@/lib/db/selects";
import { PlayerWithTable, TableSidebarType } from "@/lib/db/types";

type TablesResult =
  | { error: string }
  | { owned: TableSidebarType[]; joined: TableSidebarType[] };

export const getTableData = async (): Promise<TablesResult> => {
  const session = await auth();
  console.log("SESSION DEBUG", session);
  const userId = session?.user?.id;

  if (!session?.user?.id) {
    return { error: "Unauthorized" };
  }
  const ownedTables: TableSidebarType[] = await prisma.table.findMany({
    where: { ownerId: userId },
    select: tableSidebarSelect,
  });

  const joinedTables: TableSidebarType[] = (
    await prisma.player.findMany({
      where: { userId },
      select: {
        table: {
          select: tableSidebarSelect,
        },
      },
    })
  ).map((p: PlayerWithTable) => p.table);

  const allTables: {
    owned: TableSidebarType[];
    joined: TableSidebarType[];
  } = {
    owned: ownedTables,
    joined: joinedTables,
  };

  return allTables;
};
