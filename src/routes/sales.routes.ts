import express from 'express'

import {
  createController,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from '@/controllers/course.controllers'

const salesRouter = express.Router()

salesRouter.get('/:userId', getAllController)
salesRouter.get('/', getAllController)
salesRouter.post('/', createController)
salesRouter.get('/:id', getByIdController)
salesRouter.patch('/:id', updateController)
salesRouter.delete('/:id', deleteController)

export default salesRouter
