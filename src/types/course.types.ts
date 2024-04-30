export type Course = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export type CreateService = Omit<Course, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>

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
