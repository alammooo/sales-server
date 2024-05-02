import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  body: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  }),
})

export const registerSchema = yup.object().shape({
  body: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    phoneNumber: yup.string(),
    name: yup.string().required(),
    image: yup.string(),
  }),
})
