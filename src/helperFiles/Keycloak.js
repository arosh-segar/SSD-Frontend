import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "lynx-authentication",
  clientId: "lynx-web-app",
});

export default keycloak;
