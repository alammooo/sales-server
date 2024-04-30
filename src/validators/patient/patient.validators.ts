import { date, number, object, string } from 'yup'

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

enum Religion {
  ISLAM = 'ISLAM',
  CHRISTIANITY = 'CHRISTIANITY',
  HINDUISM = 'HINDUISM',
  BUDDHISM = 'BUDDHISM',
  OTHER = 'OTHER',
}

enum Marital {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  DIVORCED = 'DIVORCE',
}

export const createValidator = object().shape({
  body: object().shape({
    MRNumber: string().required(),
    nik: string().nullable(),
    fullName: string().nullable(),
    motherName: string().nullable(),
    placeOfBirth: string().nullable(),
    birthdate: date().nullable(),
    postalcode: string().nullable(),
    gender: string().oneOf(Object.values(Gender)).nullable(),
    religion: string().oneOf(Object.values(Religion)).nullable(),
    tribe: string().nullable(),
    language: string().nullable(),
    address: string().nullable(),
    rt: string().nullable(),
    rw: string().nullable(),
    // subDistrictId: number().nullable(),
    districtId: number().nullable(),
    cityId: number().nullable(),
    provinceId: number().nullable(),
    countryId: number().nullable(),
    phonenumber: string().nullable(),
    email: string().nullable().email(),
    occupationId: number().nullable(),
    patientPicture: string().nullable(),
    marital: string().oneOf(Object.values(Marital)).nullable(),
  }),
})

export const findValidator = object().shape({
  params: object().shape({
    id: number(),
    MRNumber: string(),
  }),
})

export const updateValidator = object().shape({
  body: object().shape({
    MRNumber: string().required(),
    nik: string().nullable(),
    fullName: string().nullable(),
    motherName: string().nullable(),
    placeOfBirth: string().nullable(),
    birthdate: date().nullable(),
    postalcode: string().nullable(),
    gender: string().oneOf(Object.values(Gender)).nullable(),
    religion: string().oneOf(Object.values(Religion)).nullable(),
    tribe: string().nullable(),
    language: string().nullable(),
    address: string().nullable(),
    rt: string().nullable(),
    rw: string().nullable(),
    // subDistrictId: number().nullable(),
    districtId: number().nullable(),
    cityId: number().nullable(),
    provinceId: number().nullable(),
    countryId: number().nullable(),
    phonenumber: string().nullable(),
    email: string().nullable().email(),
    occupationId: number().nullable(),
    patientPicture: string().nullable(),
    marital: string().oneOf(Object.values(Marital)).nullable(),
  }),
  params: object().shape({
    MRNumber: string().required(),
  }),
})

export const deleteValidator = object().shape({
  params: object().shape({
    id: number().required(),
  }),
})
