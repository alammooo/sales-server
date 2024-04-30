export interface GetAllDocumentService {
  subUnitId?: number;
  unitId?: number;
  criteriaId?: number;
  elementId?: number;
  subElementId?: number;
}

export interface CreateDocumentService {
  userId: number;
  unitId?: number;
  subUnitId?: number;
  criteriaId?: number;
  elementId?: number;
  subElementId?: number;
  documentNumber: string;
  kind: string;
  description: string;
  files?: Express.Multer.File[];
}

export interface DeleteDocumentService {
  id: number;
}
