"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Settings } from "lucide-react";

export const SettingsButton = ({ slug }: { slug: string }) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(`/table/${slug}settings`)}>
      <Settings /> Settings
    </Button>
  );
};
