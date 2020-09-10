import React, { createContext, useReducer } from 'react'
import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [user, dispatch] = useReducer(authReducer, {})

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;