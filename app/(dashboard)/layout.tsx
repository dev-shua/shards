import { ReactNode } from "react";
// import { signOut } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { useSession } from "@/lib/useSession";
import { ProfileMenu } from "@/components/navigation/profile-menu";
import { UsernamePrompt } from "@/components/user/UsernamePrompt";
import { LeftBar } from "@/features/dashboard/LeftBar";
import { RightBar } from "@/features/dashboard/RightBar";
import { TopNavigation } from "@/features/dashboard/TopNavigation";
// import { redirect } from "next/navigation";
// import { CreateTableButton } from "@/components/buttons/CreateTableButton";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen grid grid-cols-[250px_1fr_250px] grid-rows-[auto_auto_1fr] border-stone-700">
      <UsernamePrompt />
      <div className="row-span-3 border-r-1 p-4">
        <LeftBar />
      </div>

      <div className="col-start-2 col-end-3 p-4 border-b-1 text-center">
        Barre horizontale
      </div>

      <div className="row-span-3 bg-stone-900 border-l-1">
        <ProfileMenu />
        <div className="p-4">
          <RightBar />
        </div>
      </div>

      <div className="col-start-2 col-end-3 p-4 text-center">
        <TopNavigation />
      </div>

      <div className="col-start-2 col-end-3 p-8">{children}</div>
    </div>
  );
};

export default DashboardLayout;
