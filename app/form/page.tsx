"use client";
import { signUpSchema, TSignUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Form = () => {
  const {register, handleSubmit, formState: {errors, isSubmitting}, reset, setError } = useForm<TSignUpSchema>({resolver: zodResolver(signUpSchema)})

  const onSubmit = async (data: TSignUpSchema) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const responseData = await response.json();
    if(!response.ok) {
      alert("Submitting form failed!");
      return;
    }

    if(responseData.errors) {
      const errors = responseData.errors;
      if(errors.email) {
        setError("email", {
          type: "server",
          message: errors.email
        })
      } else if(errors.password) {
        setError("password", {
          type: "server",
          message: errors.password
        })
      } else if(errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword
        })
      } else {
        alert("Something went wrong!");
      }
    }

    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 w-100">
      <input {...register('email')}
      type="email"
      placeholder="Email"
      className="bg-stone-300 text-stone-800 px-4 py-2 rounded" />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
      <input {...register('password')}
      type="password"
      className="bg-stone-300 text-stone-800 px-4 py-2 rounded" />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}
      <input {...register('confirmPassword')}
      type="password"
      className="bg-stone-300 text-stone-800 px-4 py-2 rounded" />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}
      <input disabled={isSubmitting} type="submit" className="bg-stone-800 text-stone-200 py-2 rounded disabled:bg-stone-400" />
    </form>
  )
}

export default Form;
