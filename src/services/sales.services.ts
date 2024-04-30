import prisma from '@/config/prisma'
import { CreateService, DeleteService, FindService, UpdateService } from '@/types/sales.types'

export const getAllService = async () => {
  return prisma.sales.findMany()
}

export const getUniqueService = async ({ userId }: FindService) => {
  if (Boolean(userId)) {
    return prisma.sales.findMany({ where: { userId } })
  }
}

export const getByIdService = async ({ id }: FindService) => {
  return prisma.sales.findFirst({ where: { id } })
}

export const createService = async (payload: CreateService) => {
  return prisma.sales.create({
    data: payload,
  })
}

export const updateService = async ({ id, payload }: UpdateService) => {
  return prisma.sales.update({
    where: { id },
    data: payload,
  })
}

export const deleteService = async ({ id }: DeleteService) => {
  return prisma.sales.delete({
    where: { id },
  })
}
