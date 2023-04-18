import { Link } from "react-router-dom"

import { useAuthContext } from "../../contexts/AuthContext"

import "./Header.css"

export const Header = () => {
    const { isAuthenticated, username } = useAuthContext()
    return (
        <header>
            <nav className="navi">
                <div className="public-buttons">
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>

                <h1><Link className="heading" to="/">DARKOVSKI</Link></h1>

                <div className="auth-buttons">
                    {isAuthenticated && (
                        <div >
                            <span> Welcome,</span>
                            <Link to="/painter">{username}</Link>
                            <Link to="/upload-art">Upload Art</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    )}

                    {!isAuthenticated && (
                        <div >
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </div>
                    )}
                </div>

            </nav>
        </header>
    )
}