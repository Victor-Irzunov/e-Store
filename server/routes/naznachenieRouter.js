import { Router } from "express"
const router = new Router()
import { naznachenieController } from '../controllers/NaznachenieController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'


router.post('/', checkRole('ADMIN'), naznachenieController.create)
router.get('/', naznachenieController.getAll)
router.delete('/:id', checkRole('ADMIN'), naznachenieController.deleteOne)


export default router