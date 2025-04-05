"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export const CreateTableButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/table/create")}>
      <Plus /> Create Table
    </Button>
  );
};
