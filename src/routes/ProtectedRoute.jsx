import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const ProtectedRoute = ({ children }) => {
    const { state } = useContext(AuthContext)
    const location = useLocation()

    if (!state.isLogged) {
        // Si l'utilisateur n'est pas connecté, je le redirige vers la page de connexion
        return <Navigate to='/login' state={{ from: location }} />
    }

    // Si l'utilisateur est connecté, alors je retourne le composant enfant
    return children
}

export default ProtectedRoute