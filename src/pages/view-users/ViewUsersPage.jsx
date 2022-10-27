import TableView from "../../components/container/TableView";
import Sidebar from "../../components/sidebar/Sidebar";

const ViewUsersPage = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
        <TableView />
      </div>
    </div>
  );
};

export default ViewUsersPage;
