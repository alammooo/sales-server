import express from 'express'

import {
  createController,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from '@/controllers/master/occupation.controllers'
import adminOnly from '@/middleware/adminOnly'

const occupationRouter = express.Router()

// occupationRouter.use(adminOnly)
occupationRouter.get('/', getAllController)
occupationRouter.post('/', createController)
occupationRouter.get('/:occupationId', getByIdController)
occupationRouter.patch('/:occupationId', updateController)
occupationRouter.delete('/:occupationId', deleteController)

export default occupationRouter
