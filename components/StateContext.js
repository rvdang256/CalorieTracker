import React, {useState, createContext, useContext} from "react";

const StateContext2 = createContext();

function StateContext({children}) {
    const [user, setUser] = useState("booof");
    return (
        <StateContext2.Provider value={{user, setUser}}>
            {children}
        </StateContext2.Provider>
    )
}

export default StateContext;