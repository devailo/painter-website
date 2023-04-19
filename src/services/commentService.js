import { requestFactory } from "./requester"

const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'https://server-painter-website.onrender.com'

const fullUrl = `${baseUrl}/data/comments`

const request = requestFactory()

export const getAll = async(paintingId) => {
    const searchQuery = encodeURIComponent(`paintingId="${paintingId}"`)
    const relatoinQuery = encodeURIComponent(`author=_ownerId:users`)
    const result = await request.get(`${fullUrl}?where=${searchQuery}&load=${relatoinQuery}`)
    const comments = Object.values(result)

    return comments
}

export const create = async (paintingId, comment) => {
    if (comment === "") {
        alert('No text in comment field!');
        return;
    }
    const result = await request.post(fullUrl, {paintingId, comment})

    return result
}