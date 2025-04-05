import { prisma } from "@/lib/db/prisma";

export default async function TablePage({
  params,
}: {
  params: { slug: string };
}) {
  const table = await prisma.table.findUnique({
    where: { slug: params.slug },
  });

  if (!table) {
    return <div>Table introuvable...</div>;
  }

  return <div>Table : {table.name}</div>;
}
