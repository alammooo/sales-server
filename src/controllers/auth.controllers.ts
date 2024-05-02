import { compareSync, hashSync } from 'bcryptjs'

import ErrorHandler from '@/middleware/error-handler/errorHandler'
import { createUser, generateAccessToken, getUserByUsername } from '@/services/auth.services'
import { ExpressFc } from '@/types'
import { loginSchema, registerSchema } from '@/validators/auth.validators'

export const login: ExpressFc = async (req, res, next) => {
  try {
    const { body } = await loginSchema.validate(req)
    const user = await getUserByUsername(body.username)
    if (!user) throw new ErrorHandler(401, 'Username/passoword salah')
    const isValidPassword = compareSync(body.password, user.password)
    if (!isValidPassword) throw new ErrorHandler(401, 'Username/passoword salah')
    const accessToken = generateAccessToken(user.id)
    res.status(200).json({ message: 'login successfull', access_token: accessToken, data: user })
  } catch (error) {
    next(error)
  }
}

export const register: ExpressFc = async (req, res, next) => {
  try {
    const { body } = await registerSchema.validate(req)
    const user = await createUser({
      ...body,
      password: hashSync(body.password, 10),
    })
    res.status(201).json({ message: 'register successfull', data: user })
  } catch (error) {
    next(error)
  }
}
