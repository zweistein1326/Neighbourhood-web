import { createContext } from "react";

const LoginContext = createContext({
    user_id: '',
    login: () => {},
    logout: () => {},
});

export default LoginContext;