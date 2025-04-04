"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const CreateTableButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/dashboard/table/create")}>
      Create Table
    </Button>
  );
};
