import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import * as artService from '../../services/artService'

export const ArtDetails = () => {
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const { artId } = useParams()
    const [oneArt, setArt] = useState({})

    useEffect(() => {
        artService.getOne(artId)
            .then(result => {
                setArt(result)
            })
    }, [artId])

    const onCommentSubmit = async (e) => {
        e.preventDefault()

        const result = await artService.createComment(artId, {
            username,
            comment
        })

        setArt(state => ({...state, comments: {...state.comments, [result._id] : result}}))
        setUsername('')
        setComment('')
    }


    return (
        <section id="art-details">
            <h1>Name of artwork - {oneArt.title} - {oneArt.year}</h1>
            <div className="info-section">
                <div className="art-header">
                    <img className="art-img" src={oneArt.imageUrl} alt={oneArt.title} />
                    <span className="category">{oneArt.category}</span>
                    <p className="year">{oneArt.year}</p>
                </div>

                <p className="text">{oneArt.description}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {oneArt.comments && Object.values(oneArt.comments).map(c => (
                            <li key={c._id} className="comment">
                                <p>{c.username} : {c.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {/* {!Object.values(oneArt.comments).length && (
                        <p className="no-comment">no comments</p>
                    )} */}
                </div>

                <div className="buttons">
                    <a href="/" className="button">Edit</a>
                    <a href="/" className="button">delete</a>
                </div>
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