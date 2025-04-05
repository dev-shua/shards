import { useQuery } from "@tanstack/react-query";

export type Table = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  ownerId: string;
};

export type TablesResponse = {
  owned: Table[];
  joined: Table[];
};

export async function fetchMyTables(): Promise<TablesResponse> {
  const res = await fetch("/api/table");
  if (!res.ok) throw new Error("Error while loading...");
  return res.json();
}

export function useMyTables() {
  return useQuery<TablesResponse>({
    queryKey: ["my-tables"],
    queryFn: fetchMyTables,
  });
}
