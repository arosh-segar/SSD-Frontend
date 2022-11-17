import { useKeycloak } from "@react-keycloak/web";
import { apiInstance } from "../apis/apiInstance";
import keycloak from "./Keycloak";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak();
  let component = children;

  const [session, setSession] = useState(false);

  const isLoggedIn = keycloak.authenticated;

  //only for dev
  // const [cookies, setCookie, removeCookie] = useCookies(['ssd_auth']);

  useEffect(() => {
    keycloak.idTokenParsed &&
      apiInstance
        .post("/user/login", {
          email: keycloak.idTokenParsed.email,
          role: keycloak.tokenParsed.resource_access["lynx-web-app"].roles[0],
        })
        .then((res) => {
          console.log(res.data);
          setSession(true);
        })
        .catch((e) => {
          alert("User not authenticated");
          keycloak.logout();
          console.log(e);
        });
  }, [isLoggedIn]);

  if (
    isLoggedIn &&
    session &&
    children.type.name === "ViewFilesPage" &&
    !keycloak.tokenParsed.resource_access["lynx-web-app"].roles.includes(
      "Manager"
    )
  ) {
    component = null;
  }

  if (
    isLoggedIn &&
    session &&
    children.type.name === "ViewUsersPage" &&
    !keycloak.tokenParsed.resource_access["lynx-web-app"].roles.includes(
      "Admin"
    )
  ) {
    component = null;
  }

  if (
    isLoggedIn &&
    session &&
    children.type.name === "ViewMessagesPage" &&
    !keycloak.tokenParsed.resource_access["lynx-web-app"].roles.includes(
      "Worker"
    )
  ) {
    component = null;
  }

  return isLoggedIn && session ? component : null;
};

export default PrivateRoute;
