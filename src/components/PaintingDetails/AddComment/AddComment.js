import { useForm } from "../../../hooks/useForm"

import "./AddComment.css"

export const AddComment = ({
    onCommentSubmit
}) => {
    const {values, changeHandler, onSubmit } = useForm({
        comment: ''
    },onCommentSubmit)

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
                <textarea name="comment" placeholder="Comment...." value={values.comment} onChange={changeHandler}></textarea>
                <input type="submit" className="btn-comment-submit" value="Add Comment" />
            </form>
        </article>
    )
}