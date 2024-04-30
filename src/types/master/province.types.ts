export type Province = {
  id: number
  name: string
  countryId?: number
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date | null
}

export type CreateService = Omit<Province, 'id'>

export type UpdateService = {
  payload: CreateService
  id: number
}

export type DeleteService = {
  id: number
}

export type FindService = {
  id?: number
  countryId?: number
}
