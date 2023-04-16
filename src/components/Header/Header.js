import { Link } from "react-router-dom"

import { useAuthContext } from "../../contexts/AuthContext"

export const Header = () => {
    const { isAuthenticated, username , userEmail } = useAuthContext()
    return (
        <header>
            <h1><Link className="home" to="/">Darkovski</Link></h1>
            {isAuthenticated && (
                <span> Welcome,  {username}</span>
            )}
            <nav>
                <Link to="/gallery">Gallery</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/upload-art">Upload Art</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </div>
                )}

            </nav>
        </header>
    )
}