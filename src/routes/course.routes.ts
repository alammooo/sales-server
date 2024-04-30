import express from 'express'

import {
  createController,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from '@/controllers/course.controllers'

const courseRouter = express.Router()

courseRouter.get('/', getAllController)
courseRouter.post('/', createController)
courseRouter.get('/:id', getByIdController)
courseRouter.patch('/:id', updateController)
courseRouter.delete('/:id', deleteController)

export default courseRouter
