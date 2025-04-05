import { SettingsButton } from "@/components/buttons/SettingsButton";
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

  return (
    <div className="space-y-4">
      <div className="pb-2 grid grid-flow-col justify-items-end border-b-1 border-stone-500/50">
        <SettingsButton slug={slug} />
      </div>
      <h2 className="text-3xl">{table.name}</h2>
      <div className="border-1 border-stone-600/30 rounded-sm p-2">
        {table.description}
      </div>
    </div>
  );
}
