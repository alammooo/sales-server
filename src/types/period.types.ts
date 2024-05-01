import { Status } from '@/enum/status'

export type Period = {
  id: string
  name: string
  details: string
  startDate: Date
  endDate: Date
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export type CreateService = Omit<Period, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>

export type UpdateService = {
  payload: Partial<CreateService>
  id: string
}

export type DeleteService = {
  id: string
}

export type FindService = {
  id?: string
  userId?: string
}
