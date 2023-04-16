import { useEffect } from "react"
import { useAuthContext } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"

export const Logout = () => {
    const { onLogout } = useAuthContext()

    useEffect(() => {
        onLogout()

    },[onLogout])

    return <Navigate to="/" />
}