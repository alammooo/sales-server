import { number, object, string } from 'yup'

export const createValidator = object().shape({
  body: object().shape({
    name: string().required(),
    countryId: number(),
  }),
})

export const findValidator = object().shape({
  params: object().shape({
    id: number(),
    countryId: number(),
  }),
})

export const updateValidator = object().shape({
  body: object().shape({
    name: string().required(),
    countryId: number(),
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
