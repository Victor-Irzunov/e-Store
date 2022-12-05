import { Router } from "express"
const router = new Router()
import { opisanieController } from '../controllers/OpisanieController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'


router.post('/', checkRole('ADMIN'), opisanieController.create)
router.get('/', opisanieController.getAll)
router.delete('/:id', checkRole('ADMIN'), opisanieController.deleteOne)


export default router