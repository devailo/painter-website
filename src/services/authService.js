import { requestFactory } from "./requester"

const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'https://server-painter-website.onrender.com'

const fullUrl = `${baseUrl}/users`

export const authServiceFactory = (token) => {
    const request = requestFactory(token)

    return {
        login: (loginData) => request.post(`${fullUrl}/login`, loginData),
        register: (registerData) => request.post(`${fullUrl}/register`, registerData),
        logout: () => request.get(`${fullUrl}/logout`),
        getPainterDetails: async (token) => request.get(`${baseUrl}/me`, null, token)
    }
}