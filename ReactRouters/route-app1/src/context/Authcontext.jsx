//cpc

import { createContext, useState } from "react";

// creating

export const AuthContext=createContext()

// provide the Context
export const AuthContextProvider = ({ children }) => {
 
    const [isAuthDetail, setIsAuth] = useState({
        isAuth: false,
        token:null,
    })

    const login = (token) => {
        setIsAuth({
            isAuth: true,
            token:token
        })
    }
    
    const logout = () => {
        setIsAuth({
            isAuth: false,
            token:null
        })
    }
    
    console.log(isAuthDetail)

    return (
      <AuthContext.Provider value={{ isAuthDetail, login, logout, setIsAuth }}>
        {children}
      </AuthContext.Provider>
    );
}