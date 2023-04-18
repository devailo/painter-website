import { useState } from "react"

import { useForm } from "../../hooks/useForm"
import { usePaintingContext } from "../../contexts/PaintingContext"

export const UploadPainting = () => {
    const {onUploadArtSubmit} = usePaintingContext()
    const {values, changeHandler, onSubmit} = useForm({
        title: '',
        category: '',
        year: '',
        price: '',
        imageUrl: '',
        description: '',
    },onUploadArtSubmit)


    return (
        <section id="upload-page" className="auth">
            <form id="create" method="POST" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Upload Artwork</h1>
                    <label htmlFor="art-title">Artwork Title</label>
                    <input value={values.title} onChange={changeHandler} type="text" name="title" id="title" placeholder="Enter Artwork Title" />

                    {/*  TODO: must be drop down with 2-3 options for real site */}
                    <label htmlFor="category">Category</label>
                    <input value={values.category} onChange={changeHandler} type="text" name="category" id="category" placeholder="Enter Category Name" />

                    <label htmlFor="year">Year</label>
                    <input value={values.year} onChange={changeHandler} type="text" name="year" id="year" placeholder="Enter year of creation" />

                    <label htmlFor="price">Price</label>
                    <input value={values.price} onChange={changeHandler} type="text" name="price" id="price" min="1" placeholder="Enter Price" />

                    <label htmlFor="art-img">Image</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" name="imageUrl" id="imageUrl" placeholder="Upload artwork..." />

                    <label htmlFor="description">Description</label>
                    <textarea value={values.description} onChange={changeHandler} name="description" id="description" cols="30" rows="10"></textarea>
                    <input className="btn submit" type="submit" value="Upload Artwork" />

                </div>
            </form>
        </section>
    )
}