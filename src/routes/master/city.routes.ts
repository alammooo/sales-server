import express from 'express'

import {
  createController,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from '@/controllers/master/city.controllers'

const cityRouter = express.Router()

cityRouter.get('/:provinceId', getAllController)
cityRouter.get('/', getAllController)
cityRouter.post('/', createController)
cityRouter.get('/:id', getByIdController)
cityRouter.patch('/:id', updateController)
cityRouter.delete('/:id', deleteController)

export default cityRouter
