"use client";
import { useMockedUserStore } from "@/store/mockUser";

export const ShowUser = () => {
  const { user } = useMockedUserStore();

  return <h2>User: {user}</h2>;
};
