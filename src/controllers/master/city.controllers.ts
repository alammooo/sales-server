import {
  createService,
  deleteService,
  getAllService,
  getByIdService,
  updateService,
} from '@/services/master/city.services'
import { ExpressFc } from '@/types'
import {
  createValidator,
  deleteValidator,
  findValidator,
  updateValidator,
} from '@/validators/master/city.validators'

export const getAllController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await findValidator.validate(req)
    const result = await getAllService({ provinceId: params.provinceId })
    res.status(200).json({ message: 'success get all city', data: result })
  } catch (error) {
    next(error)
  }
}

export const getByIdController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await findValidator.validate(req)
    const result = await getByIdService(params)
    res.status(201).json({ message: 'success find city', data: result })
  } catch (error) {
    next(error)
  }
}

export const createController: ExpressFc = async (req, res, next) => {
  try {
    const { body } = await createValidator.validate(req)
    const result = await createService(body)
    res.status(201).json({ message: 'success create city', data: result })
  } catch (error) {
    next(error)
  }
}

export const updateController: ExpressFc = async (req, res, next) => {
  try {
    const { params, body } = await updateValidator.validate(req)
    const result = await updateService({
      id: params.id,
      payload: body,
    })
    res.status(204).json({ message: 'success delete city', data: result })
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
    res.status(204).json({ message: 'success delete city', data: result })
  } catch (error) {
    next(error)
  }
}
