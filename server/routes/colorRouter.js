import { Router } from "express"
const router = new Router()
import { colorController } from '../controllers/ColorController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'


router.post('/', checkRole('ADMIN'), colorController.create)
router.get('/', colorController.getAll)
router.delete('/:id', checkRole('ADMIN'), colorController.deleteOne)


export default router