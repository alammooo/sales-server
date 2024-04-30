export type City = {
  id: number
  name: string
  provinceId?: number
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date | null
}

export type CreateService = Omit<City, 'id'>

export type UpdateService = {
  payload: CreateService
  id: number
}

export type DeleteService = {
  id: number
}

export type FindService = {
  id?: number
  provinceId?: number
}
