import { Link } from "react-router-dom"

export const GalleryEntry = ({
    imageUrl,
    title,
    year,
    price,
    _id
}) => {
    return (
        <div className="allArt">
            <div className="allArt-info">
                <img src={imageUrl} alt={title} />
                <h1>{title}</h1>
                <h2>{price} lv</h2>
                <Link to={`/gallery/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    )
}