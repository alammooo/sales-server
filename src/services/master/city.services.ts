import prisma from '@/config/prisma'
import { CreateService, DeleteService, FindService, UpdateService } from '@/types/master/city.types'

export const getAllService = async ({ provinceId }: FindService) => {
  if (Boolean(provinceId)) {
    return prisma.city.findMany({ where: { provinceId } })
  }
  return prisma.city.findMany()
}

export const getByIdService = async ({ id }: FindService) => {
  return prisma.city.findFirst({ where: { id } })
}

export const createService = async (payload: CreateService) => {
  return prisma.city.create({
    data: payload,
  })
}

export const updateService = async ({ id, payload }: UpdateService) => {
  return prisma.city.update({
    where: { id },
    data: payload,
  })
}

export const deleteService = async ({ id }: DeleteService) => {
  return prisma.city.delete({
    where: { id },
  })
}
