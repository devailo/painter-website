import { Link } from "react-router-dom"

import { useAuthContext } from "../../contexts/AuthContext"
import { useForm } from "../../hooks/useForm"

import './Login.css';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

export const Login = () => {
    const { onLoginSubmit } = useAuthContext()
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    }, onLoginSubmit)

    return (
        <section id="login-page" className="auth">
            <form id="login" method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name={LoginFormKeys.Email} placeholder="your@email.com" value={values[LoginFormKeys.Email]} onChange={changeHandler} />

                    <label htmlFor="login-pass">Password</label>
                    <input type="password" name={LoginFormKeys.Password} id="login-password" value={values[LoginFormKeys.Password]} onChange={changeHandler} />
                    <input type="submit" value="Login" className="btn submit" />

                    <p className="field">
                        <span>If you dont have a profile click <Link to="/register">here</Link></span>
                    </p>

                </div>
            </form>
        </section>
    )
}