import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { PaintingProvider } from "./contexts/PaintingContext";

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
import { RouteGuard } from "./components/common/RouteGuard";
import { Profile } from "./components/Profile/Profile";

function App() {

    return (
        <AuthProvider>
            <PaintingProvider>
                <div id="box">
                    <Header />
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/upload-art" element={
                                <RouteGuard>
                                    <UploadPainting />
                                </RouteGuard>
                            } />
                            <Route path="/painter" element={<Profile/>}/>
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/gallery/:paintingId" element={<PaintingDetails />} />
                            <Route path="/gallery/:paintingId/edit" element={
                                <RouteGuard>
                                    <EditPainting />
                                </RouteGuard>
                            } />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </PaintingProvider>
        </AuthProvider>
    );
}

export default App;
