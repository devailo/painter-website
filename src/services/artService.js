import * as request from "./requester"

const baseUrl = 'http://localhost:3030/jsonstore/artworks'

export const getAll = async () => {

    const result = await request.get(baseUrl)
    const games = Object.values(result)

    return games
}

export const getOne = async (artId) => {
    const result = await request.get(`${baseUrl}/${artId}`)

    return result
}

export const create = async (artData) => {
    const result = await request.post(baseUrl, artData)

    return result
}

export const createComment = async (artId, data) => {
    const result = await request.post(`${baseUrl}/${artId}/comments`, data)

    return result
}