import { array, mixed, number, object } from 'yup';

export const getAllSupportDocumentFileValidator = object().shape({
  params: object().shape({
    documentId: number().required(),
  }),
});

export const createSupportDocumentFileValidator = object().shape({
  params: object().shape({
    documentId: number().required(),
  }),
  files: array().of(mixed<Express.Multer.File>().required()),
});
