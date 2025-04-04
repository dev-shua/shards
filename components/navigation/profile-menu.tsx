"use client";

import { useSession } from "@/lib/useSession";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitial } from "@/lib/utils/utils";

export const ProfileMenu = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="bg-stone-700/50 flex p-4 justify-items-center hover:bg-stone-800 transition-all cursor-pointer">
      <div className="mr-2">
        <Avatar className="size-12">
          <AvatarImage src={user?.image ?? ""} alt={user?.name ?? "Avatar"} />
          <AvatarFallback>{getInitial(user?.name)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col h-12 justify-evenly">
        <span className="text-sm truncate max-w-[160px]">{user?.name}</span>
        <span className="italic text-sm opacity-40">Something</span>
      </div>
    </div>
  );
};

// import { signOut } from "next-auth/react";
// import { Button } from "../ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";

// return (
//   <DropdownMenu>
//     <DropdownMenuTrigger asChild>
//       <Button variant="outline">{session?.user?.name}</Button>
//     </DropdownMenuTrigger>
//     <DropdownMenuContent className="w-56">
//       <DropdownMenuItem onClick={() => alert("Something !")}>
//         Something
//       </DropdownMenuItem>
//       <DropdownMenuSeparator />
//       <DropdownMenuItem>Something</DropdownMenuItem>
//       <DropdownMenuItem>Something</DropdownMenuItem>
//       <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
//     </DropdownMenuContent>
//   </DropdownMenu>
// );
