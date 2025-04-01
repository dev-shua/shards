"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const Login = () => {
  return (
    <div>
      <Button onClick={() => signIn("discord", { redirectTo: "/dashboard" })}>
        Login
      </Button>
    </div>
  );
};

export default Login;
