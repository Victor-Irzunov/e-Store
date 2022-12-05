import { models } from "../models/models.js"
import { ApiError } from '../error/ApiError.js'

class NaznachenieController {
	async create(req, res) {
		try {
			// const data = req.body
			// await models.Brand.bulkCreate(data)
			const { title } = req.body
			await models.Naznachenie.create({ title })

			return res.status(201).json({ message: `Назначение добавлено` })
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}

	}

	async getAll(req, res) {
		try {
			const brands = await models.Naznachenie.findAll()
			return res.json(brands)
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async deleteOne(req, res) {
		try {
			const { id } = req.params
			await models.Naznachenie.destroy({ where: { id: id } })
			return res.json({ message: `Назначение удалено` })
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

}

export const naznachenieController = new NaznachenieController()
