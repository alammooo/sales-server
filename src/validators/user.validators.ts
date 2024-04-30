import { number, object, string } from 'yup'

export const createValidator = object().shape({
  body: object().shape({
    name: string().required(),
  }),
})

export const findValidator = object().shape({
  body: object().shape({
    userId: number().required(),
  }),
})

export const updateValidator = object().shape({
  body: object().shape({
    name: string().required(),
  }),
  params: object().shape({
    userId: number().required(),
  }),
})

export const deleteValidator = object().shape({
  params: object().shape({
    userId: number().required(),
  }),
})
