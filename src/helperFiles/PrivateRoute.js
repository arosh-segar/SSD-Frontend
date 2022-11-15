import {useKeycloak} from "@react-keycloak/web";
import {apiInstance} from "../apis/apiInstance";
import keycloak from "./Keycloak";
import {useEffect, useState} from "react";

const PrivateRoute = ({children}) => {
    const {keycloak} = useKeycloak();
    let component = children;

    const [session, setSession] = useState('');

    const isLoggedIn = keycloak.authenticated;

    useEffect(() => {
        keycloak.idTokenParsed && (
            apiInstance.post('/user/login', {
                name: keycloak.idTokenParsed.name,
                email: keycloak.idTokenParsed.email
            }).then(res => {
                console.log(res.data)
                setSession(res.data.token)
                console.log(children.props)
            }).catch(e => {
                console.log(e)
            }))
    }, [keycloak])


    if (
        (isLoggedIn && session) &&
        children.type.name === "ViewFilesPage" &&
        !keycloak.tokenParsed.resource_access["lynx-web-app"].roles.includes(
            "Manager"
        )
    ) {
        component = null;
    }

    return (isLoggedIn && session) ? component : null;
};

export default PrivateRoute;
