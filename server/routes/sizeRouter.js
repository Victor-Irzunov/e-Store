import { Router } from "express"
const router = new Router()
import { sizeController } from '../controllers/SizeController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'


router.post('/', checkRole('ADMIN'), sizeController.create)
router.get('/', sizeController.getAll)
router.delete('/:id', sizeController.deleteOne)



export default router