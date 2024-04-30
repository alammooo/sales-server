import { STATUS } from '@/enum/status'
import { number, object, string } from 'yup'

export const createValidator = object().shape({
  body: object().shape({
    clientName: string().required(),
    clientEmail: string().required().email(),
    courseId: string().required(),
    periodId: string().required(),
    clientPassword: string().required(),
    price: number().required(),
    status: string().oneOf(STATUS).required(),
    userId: string().required(),
    redeemId: string().required(),
  }),
})

export const findValidator = object().shape({
  params: object().shape({
    id: string(),
    userId: string(),
  }),
})

export const updateValidator = object().shape({
  body: object().shape({
    clientName: string(),
    clientEmail: string().email(),
    courseId: string(),
    periodId: string(),
    clientPassword: string(),
    price: number(),
    status: string().oneOf(STATUS),
    userId: string(),
    redeemId: string(),
  }),
  params: object().shape({
    id: string().required(),
  }),
})

export const deleteValidator = object().shape({
  params: object().shape({
    id: string().required(),
  }),
})
