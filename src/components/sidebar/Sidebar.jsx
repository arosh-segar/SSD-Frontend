import React from "react";
import { Link } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { Tooltip } from "flowbite-react";

const Sidebar = () => {
  const { keycloak } = useKeycloak();
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto h-screen py-4 px-3 bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link
              to="/messages"
              className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${
                window.location.pathname.includes("messages") && "bg-gray-700"
              }`}
            >
              <svg
                aria-hidden="true"
                className={`w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white ${
                  window.location.pathname.includes("messages") && "text-white"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
              <span className="ml-3">Messages</span>
            </Link>
          </li>
          <li>
            <Link
              to="/files"
              onClick={(e) => {
                if (
                  !keycloak.tokenParsed.resource_access[
                    "lynx-web-app"
                  ].roles.includes("Manager")
                ) {
                  e.preventDefault();
                }
              }}
              className={``}
            >
              {!keycloak.tokenParsed.resource_access[
                "lynx-web-app"
              ].roles.includes("Manager") ? (
                <Tooltip content="You don't have access to view this">
                  <div
                    className={`flex w-[195.43px] items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${
                      window.location.pathname.includes("files") &&
                      "bg-gray-700"
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      className={`w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white ${
                        window.location.pathname.includes("files") &&
                        "text-white"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Files</span>
                    {!keycloak.tokenParsed.resource_access[
                      "lynx-web-app"
                    ].roles.includes("Manager") && (
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                      </svg>
                    )}
                  </div>
                </Tooltip>
              ) : (
                <div
                  className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${
                    window.location.pathname.includes("files") && "bg-gray-700"
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    className={`w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white ${
                      window.location.pathname.includes("files") && "text-white"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Files</span>
                  {!keycloak.tokenParsed.resource_access[
                    "lynx-web-app"
                  ].roles.includes("Manager") && (
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                  )}
                </div>
              )}
            </Link>
          </li>
          <li>
            <div
              onClick={() => {
                keycloak.logout();
              }}
              className="cursor-pointer flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
