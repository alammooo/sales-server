import prisma from '@/config/prisma'
import {
  CreateService,
  DeleteService,
  FindService,
  UpdateService,
} from '@/types/master/subDistrict.types'

export const getAllService = async ({ districtId }: FindService) => {
  if (Boolean(districtId)) {
    const result = await prisma.subDistrict.findMany({
      where: {
        districtId,
      },
      take: 100,
    })

    return result
  }
  const result = await prisma.subDistrict.findMany({
    take: 100,
  })

  return result
}

export const getByIdService = async ({ id }: FindService) => {
  return prisma.subDistrict.findFirst({ where: { id } })
}

export const createService = async (payload: CreateService) => {
  return prisma.subDistrict.create({
    data: payload,
  })
}

export const updateService = async ({ id, payload }: UpdateService) => {
  return prisma.subDistrict.update({
    where: { id },
    data: payload,
  })
}

export const deleteService = async ({ id }: DeleteService) => {
  return prisma.subDistrict.delete({
    where: { id },
  })
}
