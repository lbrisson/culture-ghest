import { Router } from 'express'
import controllers from '../controllers/user-controllers'

const router = Router()

// /api/user
router
    .route('/')
    .get(controllers.getOne)
    .post(controllers.createOne)

// /api/user/:id
router
    .route('/:id')
    .get(controllers.getOne)
    .put(controllers.updateOne)
    .delete(controllers.removeOne)

export default router