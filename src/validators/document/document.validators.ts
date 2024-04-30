import { array, mixed, number, object, string } from 'yup';

export const getAllDocumentValidator = object().shape({
  params: object().shape({
    subUnitId: number(),
    unitId: number(),
    criteriaId: number(),
    elementId: number(),
    subElementId: number()
  }),
});

export const createDocumentValidator = object().shape({
  body: object().shape({
    documentNumber: string().required(),
    kind: string().required(),
    description: string().required(),
  }),
  params: object().shape({
    subUnitId: number(),
    unitId: number(),
    criteriaId: number(),
    elementId: number(),
    subElementId: number()
  }),
  files: array().of(mixed<Express.Multer.File>().required()),
});

export const deleteDocumentValidator = object().shape({
  params: object().shape({
    documentId: number().required(),
  }),
});
