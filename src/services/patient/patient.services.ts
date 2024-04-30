import prisma from '@/config/prisma'
import { CreateService, DeleteService, FindService, UpdateService } from '@/types/patient.types'
import { Gender } from '@prisma/client'

export const getAllService = async () => {
  return await prisma.patient.findMany()
}

export const getByIdService = async ({ id }: FindService) => {
  return await prisma.patient.findMany({ where: { id } })
}

export const getByRMService = async ({ MRNumber }: FindService) => {
  return await prisma.patient.findFirst({ where: { MRNumber } })
}

export const createService = async (payload: CreateService) => {
  return await prisma.patient.create({
    data: {...payload, subDistrictId: BigInt(payload.subDistrictId || 0)},
  })
}

export const updateService = async ({ MRNumber, payload }: UpdateService) => {
  return await prisma.patient.update({
    where: { MRNumber },
    data: {...payload, subDistrictId: BigInt(payload.subDistrictId || 0)},
  })
}

export const deleteService = async ({ MRNumber }: DeleteService) => {
  return await prisma.patient.delete({
    where: { MRNumber },
  })
}

export const getLastRM = async () => {
  const result = await prisma.patient.findMany({
    take: 1,
    orderBy: {
      id: 'desc',
    },
    select: {
      id: true,
    },
  })

  const data = result.pop()
  if (!data?.id) {
    return '000001'
  }
  if (data?.id) {
    const lastId = data.id + 1
    return String(lastId).padStart(6, '0')
  }

  return 'Error fetching data'
}
