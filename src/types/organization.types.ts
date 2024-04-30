export interface CreateOrganizationService {
  userId: number;
  name: string;
}

export interface UpdateOrganizationService extends CreateOrganizationService {
  id: number;
}

export interface DeleteOrganizationService {
  id: number;
}

export interface FindOrganizationService {
  id: number;
}
