import { GalleryEntry } from "./GalleryEntry/GalleryEntry"

export const Gallery = ({
    art
}) => {
    return (
        <section id="catalog-page">
            <h1>Gallery</h1>
            {art.map(a =>  <GalleryEntry key={a._id} {...a} />)}

            {art.length === 0 && (
            <h3 className="no-art">No art yet</h3>
            )}
        </section>
    )
}