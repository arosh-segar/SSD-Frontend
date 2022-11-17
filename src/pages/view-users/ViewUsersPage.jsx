import UserInput from "../../components/user/userInput";
import Sidebar from "../../components/sidebar/Sidebar";

const ViewUsersPage = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
        <UserInput />
      </div>
    </div>
  );
};

export default ViewUsersPage;