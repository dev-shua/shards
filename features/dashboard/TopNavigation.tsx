"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const TopNavigation = () => {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push("/dashboard")}>Dashboard</Button>
    </div>
  );
};
