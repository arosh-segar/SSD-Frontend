import Sidebar from "../../components/sidebar/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
        <h1 className="text-white text-[80px]">Welcome Back !!!!</h1>
      </div>
    </div>
  );
};

export default DashboardPage;
