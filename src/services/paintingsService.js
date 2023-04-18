import { requestFactory } from "./requester"

const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'https://server-painter-website.onrender.com'

const fullUrl = `${baseUrl}/data/artworks`


export const paintingsServiceFactory = (token) => {
    const request = requestFactory(token)


    const getAll = async () => {

        const result = await request.get(fullUrl)
        const paintings = Object.values(result)

        return paintings
    }

    const getOne = async (paintingId) => {
        const result = await request.get(`${fullUrl}/${paintingId}`)

        return result
    }

    const create = async (paintingData) => {
        const result = await request.post(fullUrl, paintingData)

        return result
    }

    const edit = (paintingId, data) => request.put(`${fullUrl}/${paintingId}`, data)

    const deletePainting = (paintingId) => request.delete(`${fullUrl}/${paintingId}`)


    return {
        getAll,
        getOne,
        create,
        edit,
        // createComment,
        delete: deletePainting
    }
}