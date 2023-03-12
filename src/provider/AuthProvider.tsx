import React, {createContext, ReactNode, useCallback, useState} from "react"
import { User } from "firebase/auth";
interface Props {
    children?: ReactNode
}

export const AuthContext = createContext({
    user: {} as User | null,
    setUser: (_user: User | null) => {},
    isLogged: (): boolean => { return false },
})
const AuthProvider = ({ children }: Props ) => {

    const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('@user')!))
    const isLogged = useCallback(() => {
        return user !== null
    }, [user])

    return (
        <AuthContext.Provider value={{ user , setUser, isLogged}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider