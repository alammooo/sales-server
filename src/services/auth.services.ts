import jwt from 'jsonwebtoken'

import prisma from '@/config/prisma'
import { Register, User } from '@/types/user.types'

export const getUserByUsername = async (username: string) => {
  // const result = await prisma.$queryRaw<User[]>`
  // SELECT * FROM
  //   users
  // WHERE
  //   username = ${username}`;
  return await prisma.user.findFirst({ where: { username } })
  // return result[0];
}

export const generateAccessToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET)
}

export const createUser = async (payload: Register) => {
  return await prisma.user.create({
    data: payload,
  })
}
