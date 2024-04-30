import { Gender, Marital, Religion } from 'enum'

type Patient = {
  id: number
  MRNumber: string
  nik?: string | null
  fullName?: string | null
  motherName?: string | null
  placeOfBirth?: string | null
  birthdate?: Date | null
  postalcode?: string | null
  gender?: Gender | null
  religion?: Religion | null
  tribe?: string | null
  language?: string | null
  address?: string | null
  rt?: string | null
  rw?: string | null
  subDistrictId?: bigint | null
  districtId?: number | null
  cityId?: number | null
  provinceId?: number | null
  countryId?: number | null
  email?: string | null
  phoneNumber?: string | null
  occupationid?: number | null
  patientPicture?: string | null
  marital?: Marital | null
}

export type CreateService = Omit<Patient, 'id'>

export interface UpdateService {
  payload: CreateService
  id?: number
  MRNumber?: string
}

export interface DeleteService {
  id?: number
  MRNumber?: string
}

export interface FindService {
  id?: number
  MRNumber?: string
}
