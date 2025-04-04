import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { auth } from "@/lib/auth";
import { getUserTables } from "@/lib/table/getUserTables";
import { NextResponse } from "next/server";
import { DisplayTableData } from "./DisplayTableData";

export const LeftBar = async () => {
  return (
    <>
      <div className="font-metamorphous text-center text-2xl mt-5 mb-10">
        SHARDS
      </div>
      <DisplayTableData />
    </>
  );
};
