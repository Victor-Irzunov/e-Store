import { models } from "../models/models.js"
import { ApiError } from '../error/ApiError.js'

class OpisanieController {
	async create(req, res) {
		try {
			const data = req.body

			await models.Opisanie.bulkCreate(data)


			return res.status(201).json({ message: `Описание добавлено` })
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}

	}

	async getAll(req, res) {
		try {
			const opisanie = await models.Opisanie.findAll()
			return res.json(opisanie)
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async deleteOne(req, res) {
		try {
			const { id } = req.params
			await models.Opisanie.destroy({ where: { id: id } })
			return res.json({ message: `Описание удалено` })
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

}

export const opisanieController = new OpisanieController()
