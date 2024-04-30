import express from 'express'

import {
  createController,
  deleteController,
  getAllController,
  getByIdController,
  getByRMController,
  lastRMController,
  updateController,
} from '@/controllers/patient/patient.controllers'
import adminOnly from '@/middleware/adminOnly'

const patientRouter = express.Router()

// patientRouter.use(adminOnly)
patientRouter.get('/', getAllController)
patientRouter.get('/last-record-number', lastRMController)
patientRouter.post('/', createController)
patientRouter.get('/:MRNumber', getByRMController)
patientRouter.patch('/:MRNumber', updateController)
patientRouter.delete('/:id', deleteController)

export default patientRouter
