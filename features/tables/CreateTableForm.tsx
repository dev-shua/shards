"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createTableSchema, TCreateTableSchema } from "@/lib/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const CreateTableForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TCreateTableSchema>({ resolver: zodResolver(createTableSchema) });

  const onSubmit = async (data: TCreateTableSchema) => {
    const res = await fetch("/api/table", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
      }),
    });

    if (res.ok) {
      const table = await res.json();
      router.push(`/dashboard/table/${table.slug}`);
    } else {
      console.error(await res.json());
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-[120px_1fr]">
        <Label htmlFor="name">Table name</Label>
        <Input {...register("name")} />
      </div>
      {errors.name && (
        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
      )}
      <div className="grid grid-cols-[120px_1fr]">
        <Label htmlFor="description">Description</Label>
        <Textarea {...register("description")} />
      </div>
      <Button type="submit" className="" disabled={isSubmitting}>
        Create
      </Button>
    </form>
  );
};
