import { prisma } from "@/lib/db/prisma";

export default async function TablePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const table = await prisma.table.findUnique({
    where: { slug: slug },
  });

  if (!table) {
    return <div>Table introuvable...</div>;
  }

  return <div>Table : {table.name}</div>;
}
