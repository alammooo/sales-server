import {
  createRoleService,
  deleteRoleService,
  getAllRoleService,
  updateRoleService,
} from '@/services/role.services'
import { ExpressFc } from '@/types'
import {
  createRoleValidator,
  deleteRoleValidator,
  updateRoleValidator,
} from '@/validators/role.validators'

export const getAllRoleController: ExpressFc = async (req, res, next) => {
  try {
    const result = await getAllRoleService()
    res.status(200).json({ message: 'success get all role', data: result })
  } catch (error) {
    next(error)
  }
}

export const createRoleController: ExpressFc = async (req, res, next) => {
  try {
    const { body } = await createRoleValidator.validate(req)
    const result = await createRoleService(body)
    res.status(201).json({ message: 'success create role', data: result })
  } catch (error) {
    next(error)
  }
}

export const updateRoleController: ExpressFc = async (req, res, next) => {
  try {
    const { body, params } = await updateRoleValidator.validate(req)
    const result = await updateRoleService({ id: params.id, payload: body })
    res.status(200).json({ message: 'success update role', data: result })
  } catch (error) {
    next(error)
  }
}

export const deleteRoleController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await deleteRoleValidator.validate(req)
    const result = await deleteRoleService({ id: params.id })
    res.status(204).json({ message: 'success delete role', data: result })
  } catch (error) {
    next(error)
  }
}
