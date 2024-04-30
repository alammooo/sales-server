import prisma from '@/config/prisma'
import {
  CreateService,
  DeleteService,
  FindService,
  UpdateService,
} from '@/types/master/province.types'

export const getAllService = async () => {
  return prisma.country.findMany()
}

export const getByIdService = async ({ id }: FindService) => {
  return prisma.country.findFirst({ where: { id } })
}

export const createService = async (payload: CreateService) => {
  return prisma.country.create({
    data: payload,
  })
}

export const updateService = async ({ id, payload }: UpdateService) => {
  return prisma.country.update({
    where: { id },
    data: payload,
  })
}

export const deleteService = async ({ id }: DeleteService) => {
  return prisma.country.delete({
    where: { id },
  })
}
