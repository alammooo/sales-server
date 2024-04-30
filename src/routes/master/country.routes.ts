import express from 'express'

import {
  createController,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from '@/controllers/master/country.controllers'

const countryRouter = express.Router()

countryRouter.get('/', getAllController)
countryRouter.post('/', createController)
countryRouter.get('/:id', getByIdController)
countryRouter.patch('/:id', updateController)
countryRouter.delete('/:id', deleteController)

export default countryRouter
