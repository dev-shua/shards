import { Prisma } from "@prisma/client";
import { tableSelect } from "./selects";

export type TableSidebarType = Prisma.TableGetPayload<{
  select: typeof tableSelect;
}>;
