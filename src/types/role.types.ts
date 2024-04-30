export type CreateService = {
  name: string
}

export type UpdateService = {
  payload: CreateService
  id: number
}

export type DeleteService = {
  id: number
}
