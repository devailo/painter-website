import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

import { paintingsServiceFactory } from "../../services/paintingsService"
import * as commentService from '../../services/commentService'
import { useService } from "../../services/useService"
import { useAuthContext } from "../../contexts/AuthContext"

import { AddComment } from "./AddComment/AddComment"
import { usePaintingContext } from "../../contexts/PaintingContext"


export const PaintingDetails = () => {
    const { paintingId } = useParams()
    const { userId, isAuthenticated, username } = useAuthContext()
    const {deletePainting} = usePaintingContext()
    const [painting, setPainting] = useState({})
    const paintingsService = useService(paintingsServiceFactory)
    const navigate = useNavigate()

    useEffect(() => {
        Promise.all([
            paintingsService.getOne(paintingId),
            commentService.getAll(paintingId)
        ]).then(([paintingData, comments]) => {
            setPainting({
                ...paintingData,
                comments
            })
        })
    }, [paintingId])

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(paintingId, values.comment)

        console.log(response);

        setPainting(state =>
        ({
            ...state,
            comments: [
                ...state.comments,
                {
                    ...response,
                    author: {
                        username
                    }
                }
            ]
        }))

    }

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const deleteConfirm = confirm(`Are you sure you want to delete paintaing ${painting.title}`)

        if (deleteConfirm) {
            await paintingsService.delete(painting._id)

            deletePainting(painting._id)

            navigate('/gallery')
        }

    }

    return (
        <section id="art-details">
            <h1>Name of artwork - {painting.title} - {painting.year}</h1>
            <div className="info-section">
                <div className="art-header">
                    <img className="art-img" src={painting.imageUrl} alt={painting.title} />
                    <span className="category">{painting.category}</span>
                    <p className="year">{painting.year}</p>
                </div>

                <p className="text">{painting.description}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {painting.comments && painting.comments.map(c => (
                            <li key={c._id} className="comment">
                                <p>{c.author.username}: {c.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {!painting.comments?.length && (
                        <p className="no-comment">no comments</p>
                    )}
                </div>

                {painting._ownerId === userId && (
                    <div className="buttons">
                        <Link to={`/gallery/${painting._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>delete</button>
                    </div>
                )}

            </div>

            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section>
    )
}