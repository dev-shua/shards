"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const LoginButton = () => {
  return (
    <div>
      <Button
        onClick={() => signIn("discord", { redirectTo: "/dashboard" })}
        variant={"important"}
      >
        Login with Discord
      </Button>
    </div>
  );
};

export default LoginButton;
