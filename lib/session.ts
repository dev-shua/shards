import { Session } from "next-auth";
import { auth } from "./auth";

export async function getSession(): Promise<Session | null> {
  const session = await auth();

  if (process.env.NODE_ENV === "development" && !session) {
    return {
      user: {
        id: "0",
        name: "Dev Shua",
        username: null as string | null,
        email: "dev@localhost",
        tag: "00000",
        image: "https://placekitten.com/100/100",
      },
      expires: "2099-12-31T23:59:59Z",
    };
  }

  return session;
}
