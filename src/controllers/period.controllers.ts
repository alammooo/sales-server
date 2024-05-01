import dayjs from 'dayjs'

import {
  createService,
  deleteService,
  getAllService,
  getByIdService,
  updateService,
} from '@/services/period.services'
import { ExpressFc } from '@/types'
import {
  createValidator,
  deleteValidator,
  findValidator,
  updateValidator,
} from '@/validators/period.validators'

type DateRange = {
  startDate: Date
  endDate: Date
  details: string
}

function createNameFromDateRange({ startDate, endDate, details }: DateRange): string {
  const formattedStartDate = dayjs(startDate).format('YYYY-MM-DD')
  const formattedEndDate = dayjs(endDate).format('YYYY-MM-DD')
  return `${formattedStartDate} - ${formattedEndDate} (${details})`
}

export const getAllController: ExpressFc = async (req, res, next) => {
  try {
    const result = await getAllService()
    res.status(200).json({ message: 'success get all period', data: result })
  } catch (error) {
    next(error)
  }
}

export const getByIdController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await findValidator.validate(req)
    const result = await getByIdService(params)
    res.status(201).json({ message: 'success find period', data: result })
  } catch (error) {
    next(error)
  }
}

export const createController: ExpressFc = async (req, res, next) => {
  try {
    console.log({ body: req.body }, '✅✅✅✅✅✅✅✅')
    const { body } = await createValidator.validate(req)
    const name = createNameFromDateRange({
      startDate: body.startDate,
      endDate: body.endDate,
      details: body.details,
    })
    const result = await createService({ ...body, name })
    res.status(201).json({ message: 'success create period', data: result })
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
    res.status(204).json({ message: 'success delete period', data: result })
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
    res.status(204).json({ message: 'success delete period', data: result })
  } catch (error) {
    next(error)
  }
}
