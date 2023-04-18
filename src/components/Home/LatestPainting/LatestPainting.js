import { Link } from "react-router-dom"


export const LatestPainting = ({
    _id,
    imageUrl,
    title,
    year
}) => {
    return (
        <div className="art">
                    <div className="image-wrap">
                        <img src={imageUrl} />
                    </div>
                    <h3>{title}</h3>
                    <h4>year: {year}</h4>
                    <div className="data-buttons">
                        <Link to={`/gallery/${_id}`} className="btn details-btn">Details</Link>
                    </div>
                </div>
    )
}