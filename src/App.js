/* import Sidebar from "./Sidebar";
import Login from "./components/Login"; */
import LoginPage from "./pages/login/LoginPage";
import React from "react";
import Login from "./containers/login/Login";

function App() {
  return (
    <div>
      <LoginPage />
      <Login />
    </div>
  );
}

export default App;
