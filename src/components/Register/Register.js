import { useContext } from "react"
import { Link } from "react-router-dom"

import { useForm } from "../../hooks/useForm"
import { AuthContext } from "../../contexts/AuthContext"

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        rePass: ''
    }, onRegisterSubmit)

    return (
        <section id="register-page" className="content auth">
            <form method="POST" id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" id="email" placeholder="your@email.com" value={values.email} onChange={changeHandler} />

                    <label htmlFor="pass">Password</label>
                    <input type="password" name="password" id="register-password" value={values.password} onChange={changeHandler}/>

                    <label htmlFor="con-pass">Confirm Password</label>
                    <input type="password" name="rePass" id="confirm-password" value={values.rePass} onChange={changeHandler}/>

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have a profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}