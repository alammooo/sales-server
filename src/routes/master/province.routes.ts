import express from 'express'

import {
  createController,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from '@/controllers/master/province.controllers'

const provinceRouter = express.Router()

provinceRouter.get('/:countryId', getAllController)
provinceRouter.get('/', getAllController)
provinceRouter.post('/', createController)
provinceRouter.get('/:id', getByIdController)
provinceRouter.patch('/:id', updateController)
provinceRouter.delete('/:id', deleteController)

export default provinceRouter
