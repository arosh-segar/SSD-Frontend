import TableView from "../../components/container/TableView";
import MessageInput from "../../components/message/MessageInput";
import Sidebar from "../../components/sidebar/Sidebar";

const ViewMessagesPage = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
        <MessageInput />
      </div>
    </div>
  );
};

export default ViewMessagesPage;
