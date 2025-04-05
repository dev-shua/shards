import { prisma } from "@/lib/db/prisma";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function TablePage({ params }: PageProps) {
  const table = await prisma.table.findUnique({
    where: { slug: params.slug },
  });

  if (!table) {
    return <div>Table introuvable...</div>;
  }

  return <div>Table : {table.name}</div>;
}
