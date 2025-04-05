"use client";

import { useSession } from "@/lib/useSession";
import { useEffect, useState } from "react";
import { Dialog, DialogHeader, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUsernameSchema, TEditUsernameSchema } from "@/lib/types/types";
import { signIn } from "next-auth/react";

export const UsernamePrompt = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({ resolver: zodResolver(editUsernameSchema) });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user && !user.username) {
      setOpen(true);
    }
  }, [user]);

  const onSubmit = async (data: TEditUsernameSchema) => {
    const response = await fetch("/api/user/editname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
      }),
    });

    const responseData = await response.json();
    if (!response.ok) {
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.username) {
        setError("username", { type: "server", message: errors.username });
      } else {
        alert("Something went wront!");
      }
    }

    const res = await fetch("/api/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: data.username }),
    });

    if (res.ok) {
      await signIn(undefined, { redirect: false });
      setOpen(false);
    }

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>Choose your name</DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("username")} type="text" />
          {errors.username && <p>{errors.username.message}</p>}
          <Button type="submit" disabled={isSubmitting}>
            Validate
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
