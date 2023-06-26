import { createContext } from "react";
import { users } from "../dummydata/users";

const UsersContext = createContext({
    users: users,
    addUser: () => {},
    removeUser: () => { },
    updateUser: (user: any) => {}
});

export default UsersContext;