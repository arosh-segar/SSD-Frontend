import TableView from "../../components/container/TableView";
import FileInput from "../../components/file/FileInput";
import Sidebar from "../../components/sidebar/Sidebar";

const ViewFilesPage = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
        <FileInput />
      </div>
    </div>
  );
};

export default ViewFilesPage;
