import React, {createContext, ReactNode, useState} from "react"
import { User } from "firebase/auth";
interface Props {
    children?: ReactNode
}

export const AuthContext = createContext({
    user: {} as User | null,
    setUser: (_user: User) => {},
})
const AuthProvider = ({ children }: Props ) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('@user')!))

    return (
        <AuthContext.Provider value={{ user , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider