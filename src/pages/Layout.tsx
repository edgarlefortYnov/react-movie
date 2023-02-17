import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/all_films">Films</Link>
                    </li>
                </ul>
            </nav>

            <hr />
            <Outlet />
        </>
    )
};

export default Layout