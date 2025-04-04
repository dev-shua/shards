import { Prisma } from "@prisma/client";

export const tableSidebarSelect = Prisma.validator<Prisma.TableSelect>()({
  id: true,
  name: true,
  slug: true,
});
