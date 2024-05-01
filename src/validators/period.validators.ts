import { date, number, object, string } from 'yup'

import { STATUS } from '@/enum/status'

export const createValidator = object().shape({
  body: object().shape({
    details: string().required(),
    startDate: date().required(),
    endDate: date().required(),
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
    details: string(),
    startDate: date(),
    endDate: date(),
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
