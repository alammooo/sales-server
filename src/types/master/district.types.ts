export type District = {
  id: number
  name: string
  cityId?: number
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date | null
}

export type CreateService = Omit<District, 'id'>

export type UpdateService = {
  payload: CreateService
  id: number
}

export type DeleteService = {
  id: number
}

export type FindService = {
  id?: number
  cityId?: number
}
