import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { paintingsServiceFactory } from "./services/paintingsService";
import { authServiceFactory } from './services/authService'
import { AuthContext } from "./contexts/AuthContext";


import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { UploadPainting } from "./components/UploadPainting/UploadPainting";
import { Gallery } from "./components/Gallery/Gallery";
import { PaintingDetails } from "./components/PaintingDetails/PaintingDetails";
import { EditPainting } from "./components/EditPainting/EditPainting";

function App() {
    const navigate = useNavigate()
    const [paintings, setPaintings] = useState([])
    const [auth, setAuth] = useState({})
    const paintingsService = paintingsServiceFactory(auth.accessToken)
    const authService = authServiceFactory(auth.accessToken)

    useEffect(() => {
        paintingsService.getAll()
            .then(result => {
                setPaintings(result)
            })
    }, [])

    const onUploadArtSubmit = async (data) => {
        const newArt = await paintingsService.create(data)
        setPaintings(state => [...state, newArt])
        navigate('/gallery')
    }

    const onEditPaintingSubmit = async (data) => {
        const result = await paintingsService.edit(data._id, data)
        setPaintings(state => state.map(x => x._id === data._id ? result : x))
        navigate(`gallery/${data._id}`)
    }

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

    const onLogout = async () => {
        await authService.logout()
        setAuth({})
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken


    }

    return (
        <AuthContext.Provider value={contextValues}>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/upload-art" element={<UploadPainting onUploadArtSubmit={onUploadArtSubmit} />} />
                        <Route path="/gallery" element={<Gallery paintings={paintings} />} />
                        <Route path="/gallery/:paintingId" element={<PaintingDetails />} />
                        <Route path="/gallery/:paintingId/edit" element={<EditPainting onEditPaintingSubmit={onEditPaintingSubmit} />} />

                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
