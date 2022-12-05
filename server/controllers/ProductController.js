import { models } from "../models/models.js"
import { ApiError } from '../error/ApiError.js'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import { URL } from 'url'

class ProductController {
	async create(req, res, next) {
		try {
			// const data = req.body
			// await models.Brand.bulkCreate(data)
			const {
				opisanie,
				brand,
				category,
				color,
				count,
				description,
				discountPercentage,
				inStock,
				name,
				naznachenie,
				price,
				size,
				type,
			} = req.body

			console.log('-----color: ', color)



			const { img, imgMini } = req.files

			const fileName = []
			if (img) {
				const __dirname = decodeURI(new URL('.', import.meta.url).pathname)
				for (let k of img) {
					let name = uuidv4() + ".webp"
					fileName.push({ image: name })
					k.mv(path.resolve(__dirname, '..', 'static', name))
				}
			}
			const fileNameMini = []
			if (imgMini) {
				const __dirname = decodeURI(new URL('.', import.meta.url).pathname)
				for (let k of imgMini) {
					let name = uuidv4() + ".webp"
					fileNameMini.push({ image: name })
					k.mv(path.resolve(__dirname, '..', 'static', name))
				}
			}

			const product = await models.Product.create({
				price, 
				name,
				description,
				discountPercentage,
				count,
				inStock,
				img: JSON.stringify(fileName),
				imgMini: JSON.stringify(fileNameMini),
				color,
				size: JSON.stringify(size),
				typeId: type,
				brandId: brand,
				naznachenieId: naznachenie,
				categoryId: category
			})


			if (opisanie) {
				let opisanies = JSON.parse(opisanie)
				opisanies.forEach(el => {
					models.ProductInfo.create({
						title: el.title,
						description: el.description,
						productId: product.dataValues.id
					})
				})
			}

			await models.TypeBrand.create({ typeId: type, brandId: brand })
			await models.CategoryBrand.create({ categoryId: category, brandId: brand })
			await models.CategoryType.create({ categoryId: category, typeId: type })

			return res.status(201).json({ message: `Продукт добавлен` })
		}
		catch (e) {
			console.log('🦺-------err: ', e.message)
			next(ApiError.internal(e.message))
		}

	}

	async getAll(req, res, next) {
		try {
			const products = await models.Product.findAll()
			return res.json(products)
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async deleteOne(req, res, next) {
		try {
			const { id } = req.params
			await models.Product.destroy({ where: { id: id } })
			return res.json({ message: `Продукт удален` })
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

}

export const productController = new ProductController()
