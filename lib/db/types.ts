import { Prisma } from "@prisma/client";
import { tableSidebarSelect } from "./selects";

export type TableSidebarType = Prisma.TableGetPayload<{
  select: typeof tableSidebarSelect;
}>;

export type PlayerWithTable = Prisma.PlayerGetPayload<{
  select: {
    table: {
      select: typeof tableSidebarSelect;
    };
  };
}>;
