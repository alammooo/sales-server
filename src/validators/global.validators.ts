import { array, number, object } from 'yup';

export const createRoleUnitValidator = object().shape({
  body: object().shape({
    roleId: number().required(),
    unitIds: array().of(number().required()).required(),
  }),
});
