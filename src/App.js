import React from "react";
import keycloak from "./helperFiles/Keycloak";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import PrivateRoute from "./helperFiles/PrivateRoute";
import ViewMessagesPage from "./pages/view-messages/ViewMessagesPage";
import ViewFilesPage from "./pages/view-files/ViewFilesPage";

function App() {
  const eventLogger = (e) => {
    /* 
    check the details of the authentication server's response
    console.log(keycloak); 
    */
  };

  const tokenLogger = (e) => {
    /* console.log(e); */
  };
  return (
    <div>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{ onLoad: "login-required" }}
        onEvent={eventLogger}
        onTokens={tokenLogger}
      >
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Navigate replace to="/messages">
                  <PrivateRoute>
                    <ViewMessagesPage />
                  </PrivateRoute>
                </Navigate>
              }
            />
            <Route
              path="/messages"
              element={
                <PrivateRoute>
                  <ViewMessagesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/files"
              element={
                <PrivateRoute>
                  <ViewFilesPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
