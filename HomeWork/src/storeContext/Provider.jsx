import React, { useReducer } from "react";
import reducer, { initState } from "./Reducers";
import Context from "./Context";


const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;