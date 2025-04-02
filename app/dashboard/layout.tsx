import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DashboardLayout = (children: ReactNode) => {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user ? (
        <>
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="user avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          {session.user.name && <span>{session.user.name}</span>}
          <Button onClick={() => signOut()}>Log out</Button>
        </>
      ) : (
        <Link href="/">
          <Button>Log in ?</Button>
        </Link>
      )}
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
