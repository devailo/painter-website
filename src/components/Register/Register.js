export const Register = () => {
    return (
        <section id="register-page" className="content auth">
            <form action="" id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" id="email" placeholder="your@email.com" />

                    <label htmlFor="pass">Password</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have a profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
}