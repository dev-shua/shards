"use client";

import { Button } from "@/components/ui/button";
import { useMyTables } from "@/hooks/useMyTables";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function DashboardTableList() {
  const { data, isLoading, isError } = useMyTables();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (tableId: string) => {
      const res = await fetch(`/api/table/${tableId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error while deleting");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-tables"] });
    },
  });

  if (isLoading) return <p>Loading tables...</p>;
  if (isError || !data) return <p>Error while loading...</p>;

  const { owned } = data;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Your game tables</h2>
      {owned.length === 0 ? (
        <p className="text-muted-foreground text-sm">No table yet...</p>
      ) : (
        <ul className="space-y-2">
          {owned.map((table) => (
            <li
              key={table.id}
              className="flex items-center justify-between bg-stone-800/40 hover:bg-stone-800/70 p-4 rounded-md transition"
            >
              <div>
                <Link
                  href={`/table/${table.slug}`}
                  className="font-medium text-lg hover:underline"
                >
                  {table.name}
                </Link>
                <p className="text-sm text-muted-foreground">{table.slug}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => mutate(table.id)}
                  disabled={isPending}
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
