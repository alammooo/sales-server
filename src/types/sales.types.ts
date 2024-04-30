import { Status } from "@/enum/status"

export type Sales = {
  id: string
  clientName: string
  clientEmail: string
  courseId: string
  periodId: string
  clientPassword: string
  price: number
  status: Status
  userId: string
  redeemId: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export type CreateService = Omit<Sales, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>

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
