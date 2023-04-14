import { GalleryEntry } from "./GalleryEntry/GalleryEntry"

export const Gallery = ({
    paintings
}) => {
    return (
        <section id="catalog-page">
            <h1>Gallery</h1>
            {paintings.map(p =>  <GalleryEntry key={p._id} {...p} />)}

            {paintings.length === 0 && (
            <h3 className="no-art">No art yet</h3>
            )}
        </section>
    )
}