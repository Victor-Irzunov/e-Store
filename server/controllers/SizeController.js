import { models } from "../models/models.js"
import { ApiError } from '../error/ApiError.js'

class SizeController {

    async create(req, res) {
        try {
            // const data = req.body
            // await models.Brand.bulkCreate(data)
            const { title } = req.body
            
            await models.Size.create({ size: title })
            return res.status(201).json({ message: `Размер добавлен` })
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        try {
            const brands = await models.Size.findAll()
            return res.json(brands)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req, res) {
        try {
            const { id } = req.params
            await models.Size.destroy({ where: { id: id } })
            return res.json({ message: `Размер удален` })
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

export const sizeController = new SizeController()
