import { useContext } from "react"
import { Link } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext)
    return (
        <header>
            <h1><Link className="home" to="/">Darkovski</Link></h1>
                <span>{userEmail}</span>
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