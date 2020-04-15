import{ createContext } from "react";

const UserContext = createContext({
    isLoggedIn: false,
    uId: null,
    email: null,
    data: null,
    handleUpdate: () => {}

});

export default  UserContext;