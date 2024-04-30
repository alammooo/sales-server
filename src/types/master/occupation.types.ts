export interface CreateService {
  name: string
}

export interface UpdateService {
  payload: CreateService
  id: number
}

export interface DeleteService {
  id: number
}

export interface FindService {
  id: number
}
