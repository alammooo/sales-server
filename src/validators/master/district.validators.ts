import { number, object, string } from 'yup'

export const createValidator = object().shape({
  body: object().shape({
    name: string().required(),
    cityId: number(),
  }),
})

export const findValidator = object().shape({
  params: object().shape({
    id: number(),
    cityId: number(),
  }),
})

export const updateValidator = object().shape({
  body: object().shape({
    name: string().required(),
    cityId: number(),
  }),
  params: object().shape({
    id: number().required(),
  }),
})

export const deleteValidator = object().shape({
  params: object().shape({
    id: number().required(),
  }),
})
