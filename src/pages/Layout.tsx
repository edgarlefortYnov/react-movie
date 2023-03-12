import {Outlet, Link, useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "../provider/AuthProvider";
import Button from "@material-ui/core/Button";
import { signOut } from 'firebase/auth'
import {auth} from "../firebase";

const Layout = () => {
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const Logout = async () => {
        await signOut(auth)
            .then(() => {
                localStorage.removeItem('@user')
            })
        setUser(null)
        navigate('/login')
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/all_films">Films</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/all_acteurs">Acteurs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/fav">Mes Fav</Link>
                    </li>
                    <li className="nav-item">
                        {!user &&
                        <Link className="nav-link" to="/register">Register</Link>}
                    </li>
                    <li className="nav-item">
                        {!user &&
                        <Link className="nav-link" to="/login">Login</Link>}
                    </li>
                    <li className="nav-item">
                        {user &&
                            <Button variant="contained" onClick={() => Logout()}>Log out</Button>}
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout