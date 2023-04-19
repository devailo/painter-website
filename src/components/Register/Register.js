import { useContext } from "react"
import { Link } from "react-router-dom"

import { useForm } from "../../hooks/useForm"
import { AuthContext } from "../../contexts/AuthContext"

import './Register.css';

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        avatarUrl: '',
        country: '',
        about: '',
        password: '',
        rePass: ''
    }, onRegisterSubmit)

    return (
        <section id="register-page" className="content auth">
            <form method="POST" id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="erorrs"></div>
                    <h1>Register</h1>

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="your username" value={values.username} onChange={changeHandler} />

                    <label htmlFor="email">E-Mail</label>
                    <input type="text" name="email" id="email" placeholder="your@email.com" value={values.email} onChange={changeHandler} />
    
                    <label htmlFor="pass">Password</label>
                    <input type="password" name="password" id="register-password" value={values.password} onChange={changeHandler}/>

                    <label htmlFor="con-pass">Confirm Password</label>
                    <input type="password" name="rePass" id="confirm-password" value={values.rePass} onChange={changeHandler}/>

                    <label htmlFor="avatarUrl">Avatar URL</label>
                    <input type="text" name="avatarUrl" id="avatarUrl" placeholder="avatar URL" value={values.avatarUrl} onChange={changeHandler} />

                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" placeholder="your country" value={values.country} onChange={changeHandler} />

                    <label htmlFor="about">About</label>
                    <textarea value={values.about} onChange={changeHandler} name="description" id="description" cols="30" rows="10"></textarea>

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have a profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}