import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db/prisma";
import { tableSidebarSelect } from "@/lib/db/selects";
import { TableSidebarType } from "@/lib/db/types";
import { NextResponse } from "next/server";

export const DisplayTableData = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
  ).map((p) => p.table);

  const allTables: {
    owned: TableSidebarType[];
    joined: TableSidebarType[];
  } = {
    owned: ownedTables,
    joined: joinedTables,
  };

  return (
    <div className="space-y-5">
      {allTables.owned.map((table) => {
        return (
          <Accordion
            type="single"
            collapsible
            className="bg-stone-700/20 hover:bg-stone-700/50 px-4 rounded-md transition duration-500"
            key={table.slug}
          >
            <AccordionItem value={table.id}>
              <AccordionTrigger>{table.name}</AccordionTrigger>
              <AccordionContent>Something to display</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};
