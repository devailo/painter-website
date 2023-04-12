import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as artService from './services/artService'
import { AuthContext } from "./contexts/AuthContext";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { UploadArt } from "./components/UploadArt/UploadArt";
import { Gallery } from "./components/Gallery/Gallery";
import { ArtDetails } from "./components/ArtDetails/ArtDetails";

function App() {
    const navigate = useNavigate()
    const [art, setArt] = useState([])
    const [auth, setAuth] = useState({})

    useEffect(() => {
        artService.getAll()
            .then(result => {
                setArt(result)
            })
    }, [])

    const onUploadArtSubmit = async (data) => {
        const newArt = await artService.create(data)
        setArt(state => [...state, newArt])
        navigate('/gallery')
    }

    const onLoginSubmit = async (data) => {
        console.log(data);
    }

    return (
        <AuthContext.Provider value={{ onLoginSubmit }}>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/upload-Art" element={<UploadArt onUploadArtSubmit={onUploadArtSubmit} />} />
                        <Route path="/gallery" element={<Gallery art={art} />} />
                        <Route path="/gallery/:artId" element={<ArtDetails />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
