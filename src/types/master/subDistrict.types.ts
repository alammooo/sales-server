export type SubDistrict = {
  id: bigint
  name: string
  districtId?: number
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date | null
}

export type CreateService = Omit<SubDistrict, 'id'>

export type UpdateService = {
  payload: CreateService
  id: number
}

export type DeleteService = {
  id: number
}

export type FindService = {
  id?: number
  districtId?: number
}
