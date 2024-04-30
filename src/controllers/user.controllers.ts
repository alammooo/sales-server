import {
  deleteService,
  getAllService,
  getByIdService,
  updateService,
} from '@/services/user.services'
import { ExpressFc } from '@/types'
import { deleteValidator, findValidator, updateValidator } from '@/validators/user.validators'

export const getAllController: ExpressFc = async (req, res, next) => {
  try {
    const result = await getAllService()
    res.status(200).json({ message: 'success get all user', data: result })
  } catch (error) {
    next(error)
  }
}

export const getByIdController: ExpressFc = async (req, res, next) => {
  try {
    const { body } = await findValidator.validate(req)
    const result = await getByIdService({ id: body.userId })
    res.status(201).json({ message: 'success find user', data: result })
  } catch (error) {
    next(error)
  }
}

export const updateController: ExpressFc = async (req, res, next) => {
  try {
    const { params, body } = await updateValidator.validate(req)
    const result = await updateService({
      id: params.userId,
      payload: body,
    })
    res.status(204).json({ message: 'success delete user', data: result })
  } catch (error) {
    next(error)
  }
}

export const deleteController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await deleteValidator.validate(req)
    const result = await deleteService({
      id: params.userId,
    })
    res.status(204).json({ message: 'success delete user', data: result })
  } catch (error) {
    next(error)
  }
}

export const reqUserController: ExpressFc = async (req, res, next) => {
  try {
    res.status(200).json(req.user)
  } catch (error) {
    next(error)
  }
}
