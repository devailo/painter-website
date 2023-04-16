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
        try {
            const result = await authService.login(data)
            setAuth(result)
            navigate('/gallery')
        } catch (error) {
            console.log("error logging in");
        }

    }

    const onRegisterSubmit = async (data) => {
        const { rePass, ...registerData } = data;
        if (rePass !== registerData.password) {
            return
        }

        try {
            const result = await authService.register(registerData)
            setAuth(result)
            navigate('/gallery')
        } catch (error) {
            console.log("error registering");
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
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken


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