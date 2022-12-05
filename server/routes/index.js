import { Router } from "express"
const router = new Router()
import userRouter from "./userRouter.js"
import brandRouter from "./brandRouter.js"
import typeRouter from "./typeRouter.js"
import sizeRouter from "./sizeRouter.js"
import colorRouter from "./colorRouter.js"
import naznachenieRouter from "./naznachenieRouter.js"
import opisanieRouter from "./opisanieRouter.js"
import categoryRouter from "./categoryRouter.js"
import productRouter from "./productRouter.js"





router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/size', sizeRouter)
router.use('/color', colorRouter)
router.use('/naznachenie', naznachenieRouter)
router.use('/opisanie', opisanieRouter)
router.use('/category', categoryRouter)
// router.use('/typebrand', typebrandRouter)
// router.use('/rating', ratingRouter)




export default router