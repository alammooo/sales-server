import { number, object, string } from 'yup';

export const createOrganizationValidator = object().shape({
  body: object().shape({
    name: string().required(),
  }),
});

export const updateOrganizationValidator = object().shape({
  body: object().shape({
    name: string().required(),
  }),
  params: object().shape({
    organizationId: number().required(),
  }),
});

export const deleteOrganizationValidator = object().shape({
  params: object().shape({
    organizationId: number().required(),
  }),
});

export const findOrganizationValidator = object().shape({
  params: object().shape({
    organizationId: number().required(),
  }),
});
