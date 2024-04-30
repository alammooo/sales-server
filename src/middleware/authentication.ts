import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import prisma from '@/config/prisma'

import ErrorHandler from './error-handler/errorHandler'

declare module 'express-serve-static-core' {
  interface Request {
    user: {
      id: string
      roleId?: number | null
      username: string
      phoneNumber?: string | null
      isAdmin: boolean
      name: string | null
      email: string | null
      profilePicture: string | null
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
      include: { role: { select: { name: true } } },
    })
    req.user = {
      id: user.id,
      roleId: user.roleId,
      username: user.username,
      phoneNumber: user.phoneNumber,
      isAdmin: user.role?.name === 'admin',
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture,
    }
    next()
  } catch (error) {
    next(error)
  }
}

export default authentication
