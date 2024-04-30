import prisma from '@/config/prisma'
import { CreateService, DeleteService, FindService, UpdateService } from '@/types/course.types'

export const getAllService = async () => {
  return prisma.course.findMany()
}

// export const getUniqueService = async ({ userId }: FindService) => {
//   if (Boolean(userId)) {
//     return prisma.course.findMany({ where: { userId } })
//   }
// }

export const getByIdService = async ({ id }: FindService) => {
  return prisma.course.findFirst({ where: { id } })
}

export const createService = async (payload: CreateService) => {
  return prisma.course.create({
    data: payload,
  })
}

export const updateService = async ({ id, payload }: UpdateService) => {
  return prisma.course.update({
    where: { id },
    data: payload,
  })
}

export const deleteService = async ({ id }: DeleteService) => {
  return prisma.course.delete({
    where: { id },
  })
}
