import express from 'express'

import {
  createController,
  deleteController,
  getAllController,
  getByIdController,
  updateController,
} from '@/controllers/master/subDistrict.controllers'

const subDistrictRouter = express.Router()

subDistrictRouter.get('/:districtId', getAllController)
subDistrictRouter.get('/', getAllController)
subDistrictRouter.post('/', createController)
subDistrictRouter.get('/:id', getByIdController)
subDistrictRouter.patch('/:id', updateController)
subDistrictRouter.delete('/:id', deleteController)

export default subDistrictRouter
