"use client";

import { useSession } from "@/lib/useSession";
import { useEffect, useState } from "react";
import { Dialog, DialogHeader, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

export const UsernamePrompt = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
  } = useForm();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (
      user &&
      !user.username &&
      !sessionStorage.getItem("usernamePromptShown")
    ) {
      setOpen(true);
      sessionStorage.setItem("usernamePromptShown", "true");
    }
  }, [user]);

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>Choose your name</DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("username")} type="text" />
          <Button type="submit">Validate</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
