import { requestFactory } from "./requester"

const baseUrl = 'http://localhost:3030/data/artworks'

export const paintingsServiceFactory = (token) => {
    const request = requestFactory(token)


    const getAll = async () => {

        const result = await request.get(baseUrl)
        const paintings = Object.values(result)

        return paintings
    }

    const getOne = async (paintingId) => {
        const result = await request.get(`${baseUrl}/${paintingId}`)

        return result
    }

    const create = async (paintingData) => {
        const result = await request.post(baseUrl, paintingData)

        return result
    }

    const createComment = async (paintingId, data) => {
        const result = await request.post(`${baseUrl}/${paintingId}/comments`, data)

        return result
    }
    
    const edit = (paintingId, data) => request.put(`${baseUrl}/${paintingId}`, data)

    const deletePainting = (paintingId) => request.delete(`${baseUrl}/${paintingId}`)


    return {
        getAll,
        getOne,
        create,
        edit,
        createComment,
        delete: deletePainting
    }
}