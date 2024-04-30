import prisma from '@/config/prisma'
import { CreateService, DeleteService, UpdateService } from '@/types/role.types'

export const getAllRoleService = async () => {
  return prisma.role.findMany()
}

export const createRoleService = async (payload: CreateService) => {
  return prisma.role.create({
    data: payload,
  })
}

export const updateRoleService = async ({ id, payload }: UpdateService) => {
  return prisma.role.update({
    where: { id },
    data: payload,
  })
}

export const deleteRoleService = async ({ id }: DeleteService) => {
  return prisma.role.delete({
    where: { id },
  })
}
