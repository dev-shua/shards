import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTableData } from "./getTableData";

export const DisplayTableData = async () => {
  const allTables = await getTableData();

  if ("error" in allTables) {
    return <div className="text-red-500">{allTables.error}</div>;
  }

  return (
    <div className="space-y-5">
      {allTables.owned.map((table) => {
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
