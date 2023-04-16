import { Navigate, useParams } from "react-router-dom"

import { usePaintingContext } from "../../contexts/PaintingContext"
import { useAuthContext } from "../../contexts/AuthContext"

export const PaintingOwner = (
    children
) => {
    const { paintingId } = useParams()
    const { getPainting } = usePaintingContext()
    const { userId } = useAuthContext()

    const currentPainting = getPainting(paintingId)

    if (currentPainting._ownerId !== userId) {
        return <Navigate to={`/gallery/${paintingId}`} />
    }

    return (
        <>
            {children}
        </>
    )
}