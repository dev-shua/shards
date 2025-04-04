import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  login: z.string(),
  password: z.string(),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export const signinSchema = z.object({});

export const createTableSchema = z.object({
  name: z.string().min(3, "Table name must be at least 3 characters"),
  description: z.string(),
});

export type TCreateTableSchema = z.infer<typeof createTableSchema>;
