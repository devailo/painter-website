import { Link } from "react-router-dom"

import "../../Gallery/Gallery.css"

export const GalleryEntry = ({
    imageUrl,
    title,
    year,
    price,
    category,
    _id
}) => {
    return (
        <div className="allArt">
            <div className="allArt-info">
                <h1>{title} - Completed: {year}</h1>
                <h2>{category}</h2>
                <Link to={`/gallery/${_id}`} className="details-button">Details</Link>
            </div>
            <img src={imageUrl} alt={title} />
        </div>
    )
}