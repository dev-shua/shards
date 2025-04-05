import { useSession as useNextSession } from "next-auth/react";

export function useSession() {
  const session = useNextSession();

  if (process.env.NODE_ENV === "development" && !session.data?.user) {
    return {
      ...session,
      data: {
        user: {
          id: "0",
          name: "Dev Shua",
          username: "",
          tag: "00000",
          email: "dev@localhost",
          image: "https://placekitten.com/100/100",
        },
      },
      status: "authenticated",
    };
  }

  return session;
}
