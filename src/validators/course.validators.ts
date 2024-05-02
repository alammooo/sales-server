import { number, object, string } from 'yup'

export const createValidator = object().shape({
  body: object().shape({
    name: string().required(),
  }),
})

export const findValidator = object().shape({
  params: object().shape({
    id: string(),
  }),
})

export const updateValidator = object().shape({
  body: object().shape({
    name: string(),
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
