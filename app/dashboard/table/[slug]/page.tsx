import { prisma } from "@/lib/db/prisma";

interface PageProps {
  params: {
    slug: string;
  };
}

const TablePage = async ({ params }: PageProps) => {
  const table = await prisma.table.findUnique({
    where: { slug: params.slug },
  });

  if (!table) {
    return <div>Table introuvable...</div>;
  }

  return <div>Table : {table.name}</div>;
};

export default TablePage;
