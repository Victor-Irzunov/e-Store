import { models } from "../models/models.js"
import { ApiError } from '../error/ApiError.js'

class BrandController {
    async create(req, res) {
        try {
            // const data = req.body
            // await models.Brand.bulkCreate(data)
            const { title } = req.body
            await models.Brand.create({ title })

            return res.status(201).json({ message: `Бренд добавлен` })
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        try {
            const brands = await models.Brand.findAll()
            return res.json(brands)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req, res) {
        try {
            const { id } = req.params
            await models.Brand.destroy({ where: { id: id } })
            return res.json({ message: `Бренд удален` })
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

export const brandController = new BrandController()
