import { CreateTableButton } from "@/components/buttons/CreateTableButton";
import DashboardTableList from "@/features/dashboard/DisplayTables";

const DashboardPage = () => {
  return (
    <>
      <div className="mt-5 flex justify-end">
        <CreateTableButton />
      </div>
      <div>
        <DashboardTableList />
      </div>
    </>
  );
};

export default DashboardPage;
