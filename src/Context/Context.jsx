import { createContext, useEffect, useState } from "react";
export const Context = createContext()

export const ContextProvider = ({children}) => {
    const token_user = window.localStorage.getItem("token_mahalla")
    const [token, setToken] = useState(token_user !== null ? token_user: null )
    useEffect(() => {
        if(token !== null){
            window.localStorage.setItem("token_mahalla", token)
        }
    },[token])
    const user_man = window.localStorage.getItem("token_user")
    const [user, setUser] = useState(user_man !== null? JSON.parse(user_man): null)
    useEffect(()=> {
        if(user !== null){
            window.localStorage.setItem("token_user", JSON.stringify(user))
        }
    },[user])
    const [side, setSide] = useState(!false)
    return(
        <Context.Provider value={{side, setSide, token, setToken, user, setUser}}>
            {children}
        </Context.Provider>
    )
}