const { createContext } = require("react");

const UserContext = createContext({
    loggedInUser: "Dummy Name"
});

export default UserContext;