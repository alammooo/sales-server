import { Role } from "@/enum/Role"

export type User = {
  id: number
  username: string
  password: string
  phoneNumber?: string
  roleId?: number
  name?: string
  email?: string
  profilePicture?: string
}

export type FindService = {
  id: number
}

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

export type Register = {
  username: string
  password: string
  phoneNumber?: string
  name: string
  image?: string
  role?: Role
}
