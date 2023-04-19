import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from '../services/authService'
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext()

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate()
    const [auth, setAuth] = useLocalStorage('auth', {})
    const authService = authServiceFactory(auth.accessToken)

    const onLoginSubmit = async (data) => {
        if (Object.values(data).some(x => x === "")) {
            alert('All fields are required!');
            return;
        }
        try {
            const result = await authService.login(data)

            setAuth(result)
            navigate('/gallery')
        } catch (error) {
            alert('Wrong username or password');
            return;
        }

    }

    const onRegisterSubmit = async (data) => {
        const { rePass, ...registerData } = data;
        if (rePass !== registerData.password) {
            alert('Passwords dont match');
            return
        }

        if (Object.values(data).some(x => x === "")) {
            alert('All fields are required!');
            return;
        }

        try {
            const result = await authService.register(registerData)
            setAuth(result)
            navigate('/gallery')
        } catch (error) {
            alert('there was a problem');
            return;
        }
    }

    const onLogout = () => {
        authService.logout(auth.accessToken)
        setAuth({})
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        email: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
        avatarUrl: auth.avatarUrl,
        country: auth.country,
        about: auth.about,
    }


    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    return context
}