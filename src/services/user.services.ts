import prisma from '@/config/prisma'
import { CreateService, DeleteService, FindService, UpdateService } from '@/types/user.types'

export const getAllService = async () => {
  const result = await prisma.user.findMany()
  return result
}

export const getByIdService = async ({ id }: FindService) => {
  return prisma.occupation.findFirst({ where: { id } })
}

export const createService = async (payload: CreateService) => {
  return prisma.occupation.create({
    data: payload,
  })
}

export const updateService = async ({ id, payload }: UpdateService) => {
  return prisma.occupation.update({
    where: { id },
    data: payload,
  })
}

export const deleteService = async ({ id }: DeleteService) => {
  return prisma.occupation.delete({
    where: { id },
  })
}
