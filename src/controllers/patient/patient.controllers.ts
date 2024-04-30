import {
  createService,
  deleteService,
  getAllService,
  getByIdService,
  getByRMService,
  getLastRM,
  updateService,
} from '@/services/patient/patient.services'
import { ExpressFc } from '@/types'
import {
  createValidator,
  deleteValidator,
  findValidator,
  updateValidator,
} from '@/validators/patient/patient.validators'

export const getAllController: ExpressFc = async (req, res, next) => {
  try {
    const result = await getAllService()
    const stringfyResult = JSON.stringify(
      result,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value), // return everything else unchanged
    )

    res.status(200).json({
      message: 'success get all patient',
      data: JSON.parse(stringfyResult),
    })
  } catch (error) {
    next(error)
  }
}

export const getByIdController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await findValidator.validate(req)
    const result = await getByIdService(params)
    res.status(201).json({ message: 'success find patient', data: result })
  } catch (error) {
    next(error)
  }
}

export const getByRMController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await findValidator.validate(req)
    const result = await getByRMService({ MRNumber: params.MRNumber })
    const stringfyResult = JSON.stringify(
      result,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value), // return everything else unchanged
    )
    res.status(201).json({ message: 'success find patient', data: JSON.parse(stringfyResult) })
  } catch (error) {
    next(error)
  }
}

export const lastRMController: ExpressFc = async (req, res, next) => {
  try {
    const result = await getLastRM()
    res.status(201).json({ message: 'success fetch last RM Number', data: result })
  } catch (error) {
    next(error)
  }
}

export const createController: ExpressFc = async (req, res, next) => {
  try {
    const { body } = await createValidator.validate(req)
    const result = await createService(body)
    const stringfyResult = JSON.stringify(
      result,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value), // return everything else unchanged
    )

    res.status(200).json({
      message: 'success create patient',
      data: JSON.parse(stringfyResult),
    })
  } catch (error) {
    console.log(error, 'HALLO ERROR')
    next(error)
  }
}

export const updateController: ExpressFc = async (req, res, next) => {
  try {
    console.log(req.body, "HALLO MASUK SINI")
    const { params, body } = await updateValidator.validate(req)
    const result = await updateService({
      MRNumber: params.MRNumber,
      payload: body,
    })
    const stringfyResult = JSON.stringify(
      result,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value), // return everything else unchanged
    )

    res.status(200).json({
      message: 'success update patient',
      data: JSON.parse(stringfyResult),
    })
  } catch (error) {
    next(error)
  }
}

export const deleteController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await deleteValidator.validate(req)
    const result = await deleteService({
      id: params.id,
    })
    res.status(204).json({ message: 'success delete patient', data: result })
  } catch (error) {
    next(error)
  }
}
