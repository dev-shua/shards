"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMyTables } from "@/hooks/useMyTables";
import type { TablesResponse } from "@/hooks/useMyTables";

export const DisplayTableData = () => {
  const { data, isLoading, isError } = useMyTables();

  if (!isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error while loading</p>;
  const tables = data! as TablesResponse;
  const { owned, joined } = tables;

  return (
    <div className="space-y-5">
      {owned.map((table) => {
        return (
          <Accordion
            type="single"
            collapsible
            className="bg-stone-700/20 hover:bg-stone-700/50 px-4 rounded-md transition duration-500"
            key={table.slug}
          >
            <AccordionItem value={table.id}>
              <AccordionTrigger>{table.name}</AccordionTrigger>
              <AccordionContent>Something to display</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};
