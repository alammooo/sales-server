import express from 'express'

import {
  createController,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from '@/controllers/period.controllers'

const periodRouter = express.Router()

periodRouter.get('/', getAllController)
periodRouter.post('/', createController)
periodRouter.get('/:id', getByIdController)
periodRouter.patch('/:id', updateController)
periodRouter.delete('/:id', deleteController)

export default periodRouter
