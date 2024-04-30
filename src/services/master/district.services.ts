import prisma from '@/config/prisma'
import {
  CreateService,
  DeleteService,
  FindService,
  UpdateService,
} from '@/types/master/district.types'

export const getAllService = async ({ cityId }: FindService) => {
  if (Boolean(cityId)) {
    return prisma.district.findMany({
      where: {
        cityId,
      },
      take: 100,
    })
  }
  return prisma.district.findMany({
    take: 100,
  })
}

export const getByIdService = async ({ id }: FindService) => {
  return prisma.district.findFirst({ where: { id } })
}

export const createService = async (payload: CreateService) => {
  return prisma.district.create({
    data: payload,
  })
}

export const updateService = async ({ id, payload }: UpdateService) => {
  return prisma.district.update({
    where: { id },
    data: payload,
  })
}

export const deleteService = async ({ id }: DeleteService) => {
  return prisma.district.delete({
    where: { id },
  })
}
