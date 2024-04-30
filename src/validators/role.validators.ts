import { number, object, string } from 'yup'

export const createRoleValidator = object().shape({
  body: object().shape({
    name: string().required(),
  }),
})

export const updateRoleValidator = object().shape({
  body: object().shape({
    name: string().required(),
  }),
  params: object().shape({
    id: number().required(),
  }),
})

export const deleteRoleValidator = object().shape({
  params: object().shape({
    id: number().required(),
  }),
})
