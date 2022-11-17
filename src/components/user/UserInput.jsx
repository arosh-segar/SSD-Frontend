import ToastMessage from "../container/Toast";
import { useState } from "react";
import { apiInstance } from "../../apis/apiInstance";
import { encryptText } from "../../utils/message";

const UserInput = () => {
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName, email, password, userRole);
    /* apiInstance
      .post("/message", {
        message: message,
        hash: encryptText(message),
      })
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((e) => {
        alert(e.message);
      }); */
  };

  return (
    <>
      <div className="absolute top-10">
        <ToastMessage
          msg="Message added successfully"
          isVisible={isSuccessToastVisible}
          setIsVisible={setIsSuccessToastVisible}
          svg={
            <svg
              aria-hidden="true"
              class="w-6 h-6 bg-green-800 text-green-200 rounded-lg"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          }
        />
      </div>
      <div class=" w-11/12 relative">
        <form onSubmit={handleSubmit}>
          <div class="mb-4 w-full rounded-lg border bg-gray-700 border-gray-600">
            <div className="px-3 py-2">
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="email"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  class="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-px-0 w-full text-sm border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400"
                  placeholder="user-name"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-px-0 w-full text-sm border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400"
                  placeholder="user@gmail.com"
                  required
                />
              </div>
              <label
                for="countries"
                class="block mb-2 mt-6 text-sm font-medium text-white"
              >
                Select user role
              </label>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                class="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-px-0 w-full text-sm border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400"
              >
                <option value="Worker">Worker</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
              </select>
              <div class="my-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-px-0 w-full text-sm border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400"
                  placeholder="******"
                  required
                />
              </div>
            </div>
            <div class="flex justify-between items-center py-2 px-3 border-t border-gray-600">
              <button
                type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-900 hover:bg-blue-800"
              >
                Save User
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserInput;
