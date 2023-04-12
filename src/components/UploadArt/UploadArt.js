import { useState } from "react"

export const UploadArt = ({
    onUploadArtSubmit
}) => {
    const [values, setValues] = useState({
        title: '',
        category: '',
        year: '',
        price: '',
        imageUrl: '',
        description: '',
    })

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onUploadArtSubmit(values)
    }

    return (
        <section id="upload-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Upload Artwork</h1>
                    <label htmlFor="art-title">Artwork Title</label>
                    <input value={values.title} onChange={onChangeHandler} type="text" name="title" id="title" placeholder="Enter Artwork Title" />

                    {/*  TODO: must be drop down with 2-3 options for real site */}
                    <label htmlFor="category">Category</label>
                    <input value={values.category} onChange={onChangeHandler} type="text" name="category" id="category" placeholder="Enter Category Name" />

                    <label htmlFor="year">Year</label>
                    <input value={values.year} onChange={onChangeHandler} type="number" name="year" id="year" placeholder="Enter year of creation" />

                    <label htmlFor="price">Price</label>
                    <input value={values.price} onChange={onChangeHandler} type="number" name="price" id="price" min="1" placeholder="Enter Price" />

                    <label htmlFor="art-img">Image</label>
                    <input value={values.imageUrl} onChange={onChangeHandler} type="text" name="imageUrl" id="imageUrl" placeholder="Upload artwork..." />

                    <label htmlFor="description">Description</label>
                    <textarea value={values.description} onChange={onChangeHandler} name="description" id="description" cols="30" rows="10"></textarea>
                    <input className="btn submit" type="submit" value="Upload Artwork" />

                </div>
            </form>
        </section>
    )
}