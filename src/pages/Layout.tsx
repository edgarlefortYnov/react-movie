import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav mr-auto">
                    <div className="nav-logo">LOGO</div>
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
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout