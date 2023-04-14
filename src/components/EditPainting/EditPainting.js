import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useForm } from "../../hooks/useForm"
import { useService } from "../../services/useService"
import { paintingsServiceFactory } from "../../services/paintingsService"

export const EditPainting = ({
    onEditPaintingSubmit
}) => {
    const { paintingId } = useParams()
    const paintingsService = useService(paintingsServiceFactory)
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        category: '',
        year: '',
        price: '',
        imageUrl: '',
        description: '',
    }, onEditPaintingSubmit)

    useEffect(() => {
        paintingsService.getOne(paintingId)
            .then(result => {
                changeValues(result)
            })
    },[paintingId])

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="POST" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Upload Artwork</h1>
                    <label htmlFor="art-title">Artwork Title</label>
                    <input value={values.title} onChange={changeHandler} type="text" name="title" id="title" placeholder="Enter Artwork Title" />

                    {/*  TODO: must be drop down with 2-3 options for real site */}
                    <label htmlFor="category">Category</label>
                    <input value={values.category} onChange={changeHandler} type="text" name="category" id="category" placeholder="Enter Category Name" />

                    <label htmlFor="year">Year</label>
                    <input value={values.year} onChange={changeHandler} type="number" name="year" id="year" placeholder="Enter year of creation" />

                    <label htmlFor="price">Price</label>
                    <input value={values.price} onChange={changeHandler} type="number" name="price" id="price" min="1" placeholder="Enter Price" />

                    <label htmlFor="art-img">Image</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" name="imageUrl" id="imageUrl" placeholder="Upload artwork..." />

                    <label htmlFor="description">Description</label>
                    <textarea value={values.description} onChange={changeHandler} name="description" id="description" cols="30" rows="10"></textarea>
                    <input className="btn submit" type="submit" value="Edit Artwork Details" />

                </div>
            </form>
        </section>
    )
}