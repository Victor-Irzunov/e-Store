import { models } from "../models/models.js"
import { ApiError } from '../error/ApiError.js'

class ColorController {
    async create(req, res) {
        try {
            // const data = req.body
            // await models.Brand.bulkCreate(data)
            const { title, color } = req.body
            await models.Color.create({ name: title, color })

            return res.status(201).json({ message: `Цвет добавлен` })
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        try {
            const brands = await models.Color.findAll()
            return res.json(brands)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req, res) {
        try {
            const { id } = req.params
            await models.Color.destroy({ where: { id: id } })
            return res.json({ message: `Цвет удален` })
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

export const colorController = new ColorController()
