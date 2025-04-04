"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema, TLoginSchema } from "@/lib/types/types";
import { useMockedUserStore } from "@/store/mockUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });
  const { loggedUser } = useMockedUserStore();

  const onSubmit = async (data: TLoginSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    loggedUser(data.login);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <Input {...register("login")} placeholder="Login" className="" />
      <Input
        {...register("password")}
        type="password"
        placeholder="Password"
        className=""
      />
      <Button
        disabled={isSubmitting}
        className="cursor-pointer hover:bg-stone-950 transition-all disabled:bg-stone-600"
      >
        Login
      </Button>
      <Button variant="link" className="text-stone-400 cursor-pointer">
        Create account
      </Button>
    </form>
  );
};
