import prisma from '@/config/prisma'
import { CreateService, DeleteService, FindService, UpdateService } from '@/types/period.types'

export const getAllService = async () => {
  return prisma.period.findMany()
}

// export const getUniqueService = async ({ userId }: FindService) => {
//   if (Boolean(userId)) {
//     return prisma.period.findMany({ where: { userId } })
//   }
// }

export const getByIdService = async ({ id }: FindService) => {
  return prisma.period.findFirst({ where: { id } })
}

export const createService = async (payload: CreateService) => {
  return prisma.period.create({
    data: payload,
  })
}

export const updateService = async ({ id, payload }: UpdateService) => {
  return prisma.period.update({
    where: { id },
    data: payload,
  })
}

export const deleteService = async ({ id }: DeleteService) => {
  return prisma.period.delete({
    where: { id },
  })
}
