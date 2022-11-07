import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak();
  let component = children;

  const isLoggedIn = keycloak.authenticated;

  if (
    isLoggedIn &&
    children.type.name === "ViewFilesPage" &&
    !keycloak.tokenParsed.resource_access["lynx-web-app"].roles.includes(
      "Manager"
    )
  ) {
    component = null;
  }

  return isLoggedIn ? component : null;
};

export default PrivateRoute;
