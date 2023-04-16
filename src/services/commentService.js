import { requestFactory } from "./requester"

const baseUrl = 'http://localhost:3030/data/comments'
const request = requestFactory()

export const getAll = async(paintingId) => {
    const searchQuery = encodeURIComponent(`paintingId="${paintingId}"`)
    const relatoinQuery = encodeURIComponent(`author=_ownerId:users`)
    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relatoinQuery}`)
    const comments = Object.values(result)

    return comments
}

export const create = async (paintingId, comment) => {
    const result = await request.post(baseUrl, {paintingId, comment})

    return result
}