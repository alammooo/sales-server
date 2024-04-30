import express from 'express'

import {
  createController,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from '@/controllers/master/district.controllers'

const districtRouter = express.Router()

districtRouter.get('/:cityId', getAllController)
districtRouter.get('/', getAllController)
districtRouter.post('/', createController)
districtRouter.get('/:id', getByIdController)
districtRouter.patch('/:id', updateController)
districtRouter.delete('/:id', deleteController)

export default districtRouter
