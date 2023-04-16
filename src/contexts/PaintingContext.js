import { createContext, useState, useEffect, useContext } from "react";

import { paintingsServiceFactory } from "../services/paintingsService";
import { useNavigate } from "react-router-dom";

export const PaintingContext = createContext()

export const PaintingProvider = ({
    children
}) => {

    const navigate = useNavigate()
    const [paintings, setPaintings] = useState([])
    const paintingsService = paintingsServiceFactory() //auth.accessToken

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

    const deletePainting = (paintingId) => {
        setPaintings(state => state.filter(painting => painting._id !== paintingId))
    }

    const getPainting = (PaintingId) => {
        return paintings.find(painting => painting._id === PaintingId)
    }

    const contextValues = {
        paintings,
        onUploadArtSubmit,
        onEditPaintingSubmit,
        deletePainting,
        getPainting,
    }

    return (
        <PaintingContext.Provider value={contextValues}>
            {children}
        </PaintingContext.Provider>
    )
}

export const usePaintingContext = () => {
    const context = useContext(PaintingContext)

    return context
}