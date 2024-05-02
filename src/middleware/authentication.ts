import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import prisma from '@/config/prisma'
import { Role } from '@/enum/Role'

import ErrorHandler from './error-handler/errorHandler'

declare module 'express-serve-static-core' {
  interface Request {
    user: {
      id: string
      role: Role | null
      username: string
      phoneNumber?: string | null
      name: string | null
      image: string | null
    }
  }
}

const authentication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers
    if (!authorization) throw new ErrorHandler(401, 'Require access token')
    const accessToken = authorization.split(' ')[1]
    const { userId } = jwt.verify(accessToken, process.env.JWT_SECRET) as { userId: string }
    const user = await prisma.user.findFirstOrThrow({
      where: { id: userId },
    })
    req.user = {
      id: user.id,
      role: user.role,
      username: user.username,
      phoneNumber: user.phoneNumber,
      name: user.name,
      image: user.image,
    }
    next()
  } catch (error) {
    next(error)
  }
}

export default authentication
