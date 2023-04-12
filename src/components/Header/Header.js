import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <h1><Link className="home" to="/">Darkovski</Link></h1>
            <nav>
                <Link to="/gallery">Gallery</Link>
                <div id="user">
                    <Link to="/upload-art">Upload Art</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div id="guest">
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </header>
    )
}