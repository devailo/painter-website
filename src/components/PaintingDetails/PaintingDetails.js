import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

import { paintingsServiceFactory } from "../../services/paintingsService"
import { useService } from "../../services/useService"
import { AuthContext } from "../../contexts/AuthContext"

export const PaintingDetails = () => {
    const { userId } = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const { paintingId } = useParams()
    const [painting, setPainting] = useState({})
    const paintingsService = useService(paintingsServiceFactory)
    const navigate = useNavigate()

    useEffect(() => {
        paintingsService.getOne(paintingId)
            .then(result => {
                setPainting(result)
            })
    }, [paintingId])

    const onCommentSubmit = async (e) => {
        e.preventDefault()

        const result = await paintingsService.createComment(paintingId, {
            username,
            comment
        })

        setPainting(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }))
        setUsername('')
        setComment('')
    }

    const onDeleteClick = async () => {
        await paintingsService.delete(painting._id)

        //TODO: delete from state

        navigate('/gallery')
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
                        {painting.comments && Object.values(painting.comments).map(c => (
                            <li key={c._id} className="comment">
                                <p>{c.username} : {c.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {/* {!Object.values(oneArt.comments).length && (
                        <p className="no-comment">no comments</p>
                    )} */}
                </div>

                {painting._ownerId === userId && (
                    <div className="buttons">
                        <Link to={`/gallery/${painting._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>delete</button>
                    </div>
                )}

            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <textarea name="comment" placeholder="Comment...." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <input type="submit" className="btn submit" value="Add Comment" />
                </form>
            </article>
        </section>
    )
}