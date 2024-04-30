import prisma from '@/config/prisma'
import {
  CreateService,
  DeleteService,
  FindService,
  UpdateService,
} from '@/types/master/province.types'

export const getAllService = async ({ countryId }: FindService) => {
  if (Boolean(countryId)) {
    return prisma.province.findMany({ where: { countryId } })
  }
  return prisma.province.findMany()
}

export const getByIdService = async ({ id }: FindService) => {
  return prisma.province.findFirst({ where: { id } })
}

export const createService = async (payload: CreateService) => {
  return prisma.province.create({
    data: payload,
  })
}

export const updateService = async ({ id, payload }: UpdateService) => {
  return prisma.province.update({
    where: { id },
    data: payload,
  })
}

export const deleteService = async ({ id }: DeleteService) => {
  return prisma.province.delete({
    where: { id },
  })
}
