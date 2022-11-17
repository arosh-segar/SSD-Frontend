import React from "react";
import keycloak from "./helperFiles/Keycloak";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import PrivateRoute from "./helperFiles/PrivateRoute";
import ViewMessagesPage from "./pages/view-messages/ViewMessagesPage";
import ViewFilesPage from "./pages/view-files/ViewFilesPage";
import ViewUsersPage from "./pages/view-users/ViewUsersPage";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
    const eventLogger = (e) => {
        const user = keycloak.idTokenParsed.name;
        console.log(user);
    };

    const tokenLogger = (e) => {
        /* console.log(e); */
    };
    return (
        <div>
            <ReactKeycloakProvider
                authClient={keycloak}
                initOptions={{onLoad: "login-required"}}
                onEvent={eventLogger}
                onTokens={tokenLogger}
            >
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <DashboardPage/>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/messages"
                            element={
                                <PrivateRoute>
                                    <ViewMessagesPage/>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/files"
                            element={
                                <PrivateRoute>
                                    <ViewFilesPage/>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/users"
                            element={
                                <PrivateRoute>
                                    <ViewUsersPage/>
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
            </ReactKeycloakProvider>
        </div>
    );
}

export default App;
