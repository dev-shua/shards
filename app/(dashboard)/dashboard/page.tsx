import { CreateTableButton } from "@/components/buttons/CreateTableButton";
import DashboardTableList from "@/features/dashboard/DisplayTables";

const DashboardPage = () => {
  return (
    <>
      <div className="mt-5 flex justify-end w-full border-b-1 border-stone-500/30 pb-2">
        <CreateTableButton />
      </div>
      <div>
        <DashboardTableList />
      </div>
    </>
  );
};

export default DashboardPage;
