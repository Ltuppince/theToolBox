import{ createContext } from "react";

const UserContext = createContext({
    isLoggedIn: false,
    uId: null,
    email: null,
    test: "",
    handleUpdate: () => {}

});

export default  UserContext;